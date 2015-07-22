using CommandPromptHereGen.PromptStrategies;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace CommandPromptHereGenTests.PromptStrategies
{
	[TestFixture]
	public class CommonFixture
	{
		private List<string> _acceleratorsFound;
		private List<string> _idsFound;
		private List<string> _namesFound;

		[TestFixtureSetUp]
		public void TestFixtureSetUp()
		{
			this._acceleratorsFound = new List<string>();
			this._idsFound = new List<string>();
			this._namesFound = new List<string>();
		}

		[Test(Description = "Verifies that standard properties on the strategies are populated.")]
		[TestCaseSource("Strategies")]
		public void StandardPropertiesPopulated(IPromptStrategy strategy)
		{
			Assert.IsNotNullOrEmpty(strategy.Accelerator, "The accelerator text should not be null or empty.");
			Assert.IsTrue(strategy.Accelerator.Contains('&'), "The accelerator text should contain a hotkey designated.");
			Assert.IsNotNullOrEmpty(strategy.CommandLine, "The command line should not be null or empty.");
			Assert.IsNotNullOrEmpty(strategy.Id, "The ID should not be null or empty.");
			Assert.IsNotNullOrEmpty(strategy.Name, "The name should not be null or empty.");
		}

		[Test(Description = "Verifies that standard properties on the strategies are populated.")]
		[TestCaseSource("Strategies")]
		public void StrategyValuesUnique(IPromptStrategy strategy)
		{
			Assert.IsFalse(this._acceleratorsFound.Contains(strategy.Accelerator), String.Format("The accelerator key {0} is a duplicate.", strategy.Accelerator));
			Assert.IsFalse(this._idsFound.Contains(strategy.Id), String.Format("The ID {0} is a duplicate.", strategy.Id));
			Assert.IsFalse(this._namesFound.Contains(strategy.Name), String.Format("The prompt name {0} is a duplicate.", strategy.Name));
			this._acceleratorsFound.Add(strategy.Accelerator);
			this._idsFound.Add(strategy.Id);
			this._namesFound.Add(strategy.Name);
		}

		[Test(Description = "All strategies should use cd /d to ensure they can switch drives, not just directories.")]
		[TestCaseSource("Strategies")]
		public void DriveSwitchSupported(IPromptStrategy strategy)
		{
			if (Regex.IsMatch(strategy.CommandLine, @"\bcmd.exe\b"))
			{
				// "cd" in other prompts like PowerShell don't use /d
				Assert.IsTrue(Regex.IsMatch(strategy.CommandLine, @"\bcd /d\b"), String.Format("The strategy {0} doesn't switch drives.", strategy.Id));
			}
		}

		private IEnumerable<IPromptStrategy> Strategies
		{
			get
			{
				return typeof(IPromptStrategy).Assembly.GetStrategies();
			}
		}
	}
}
