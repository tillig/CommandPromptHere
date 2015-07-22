using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace CommandPromptHereGen.PromptStrategies
{
	/// <summary>
	/// Extension methods for <see cref="System.Reflection.Assembly"/>
	/// helpful in scanning.
	/// </summary>
	public static class AssemblyExtensions
	{
		/// <summary>
		/// Retrieves the prompt strategies from an assembly.
		/// </summary>
		/// <param name="assembly">The <see cref="System.Reflection.Assembly"/> to check.</param>
		/// <returns>
		/// Instances of the types in the assembly that implement
		/// <see cref="CommandPromptHereGen.PromptStrategies.IPromptStrategy"/>.
		/// </returns>
		/// <exception cref="System.ArgumentNullException">
		/// Thrown if <paramref name="assembly" /> is <see langword="null" />.
		/// </exception>
		public static IEnumerable<IPromptStrategy> GetStrategies(this Assembly assembly)
		{
			if (assembly == null)
			{
				throw new ArgumentNullException("assembly");
			}
			foreach (var ps in assembly.GetStrategyTypes())
			{
				yield return Activator.CreateInstance(ps) as IPromptStrategy;
			}
		}

		/// <summary>
		/// Retrieves all of the (non-empty) strategy types from an assembly.
		/// </summary>
		/// <param name="assembly">The <see cref="System.Reflection.Assembly"/> to check.</param>
		/// <returns>
		/// The types in the assembly that implement
		/// <see cref="CommandPromptHereGen.PromptStrategies.IPromptStrategy"/>.
		/// </returns>
		/// <exception cref="System.ArgumentNullException">
		/// Thrown if <paramref name="assembly" /> is <see langword="null" />.
		/// </exception>
		public static IEnumerable<Type> GetStrategyTypes(this Assembly assembly)
		{
			if (assembly == null)
			{
				throw new ArgumentNullException("assembly");
			}
			return assembly
				.GetTypes()
				.Where(type =>
					typeof(IPromptStrategy).IsAssignableFrom(type) &&
					type.IsClass &&
					!type.IsAbstract &&
					type != typeof(EmptyStrategy));
		}
	}
}
