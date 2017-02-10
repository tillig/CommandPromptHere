using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using CommandPromptHereGen.PromptStrategies;
using Xunit;

namespace CommandPromptHereGenTests.PromptStrategies
{
	public class CommonFixture
	{
		public static IEnumerable<IPromptStrategy> Strategies
		{
			get
			{
				return typeof(IPromptStrategy).Assembly.GetStrategies();
			}
		}

		public static IEnumerable<object[]> StrategiesMemberData
		{
			get
			{
				return Strategies.Select(s => new object[] { s });
			}
		}

		[Theory]
		[MemberData("StrategiesMemberData")]
		public void AcceleratorContainsHotkey(IPromptStrategy strategy)
		{
			Assert.True(strategy.Accelerator.Contains('&'), "The accelerator text should contain a hotkey designated.");
		}

		[Theory]
		[MemberData("StrategiesMemberData")]
		public void AcceleratorPopulated(IPromptStrategy strategy)
		{
			Assert.NotEmpty(strategy.Accelerator);
		}

		[Fact]
		public void AcceleratorsUnique()
		{
			var strategies = CommonFixture.Strategies.ToArray();
			var accelerators = strategies.Select(s => s.Accelerator).ToArray();
			Assert.Equal(accelerators.Length, accelerators.Distinct().Count());
		}

		[Theory]
		[MemberData("StrategiesMemberData")]
		public void CommandLinePopulated(IPromptStrategy strategy)
		{
			Assert.NotEmpty(strategy.CommandLine);
		}

		[Theory]
		[MemberData("StrategiesMemberData")]
		public void DriveSwitchSupported(IPromptStrategy strategy)
		{
			if (Regex.IsMatch(strategy.CommandLine, @"\bcmd.exe\b"))
			{
				// "cd" in other prompts like PowerShell don't use /d
				Assert.True(Regex.IsMatch(strategy.CommandLine, @"\bcd /d\b"), string.Format("The strategy {0} doesn't switch drives.", strategy.Id));
			}
		}

		[Theory]
		[MemberData("StrategiesMemberData")]
		public void IdPopulated(IPromptStrategy strategy)
		{
			Assert.NotEmpty(strategy.Id);
		}

		[Fact]
		public void IdsUnique()
		{
			var strategies = CommonFixture.Strategies.ToArray();
			var ids = strategies.Select(s => s.Id).ToArray();
			Assert.Equal(ids.Length, ids.Distinct().Count());
		}

		[Theory]
		[MemberData("StrategiesMemberData")]
		public void NamePopulated(IPromptStrategy strategy)
		{
			Assert.NotEmpty(strategy.Name);
		}

		[Fact]
		public void NamesUnique()
		{
			var strategies = CommonFixture.Strategies.ToArray();
			var names = strategies.Select(s => s.Name).ToArray();
			Assert.Equal(names.Length, names.Distinct().Count());
		}
	}
}
