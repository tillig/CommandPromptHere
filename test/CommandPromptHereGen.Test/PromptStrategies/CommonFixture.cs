using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using CommandPromptHereGen.PromptStrategies;
using Xunit;

namespace CommandPromptHereGen.Test.PromptStrategies
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
        [MemberData(nameof(StrategiesMemberData))]
        public void AcceleratorContainsHotkey(IPromptStrategy strategy)
        {
            Assert.Contains('&', strategy.Accelerator);
        }

        [Theory]
        [MemberData(nameof(StrategiesMemberData))]
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
        [MemberData(nameof(StrategiesMemberData))]
        public void CommandLinePopulated(IPromptStrategy strategy)
        {
            Assert.NotEmpty(strategy.CommandLine);
        }

        [Theory]
        [MemberData(nameof(StrategiesMemberData))]
        public void DriveSwitchSupported(IPromptStrategy strategy)
        {
            if (Regex.IsMatch(strategy.CommandLine, @"\bcmd.exe\b"))
            {
                // "cd" in other prompts like PowerShell don't use /d
                Assert.Matches(@"\bcd /d\b", strategy.CommandLine);
            }
        }

        [Theory]
        [MemberData(nameof(StrategiesMemberData))]
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
        [MemberData(nameof(StrategiesMemberData))]
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
