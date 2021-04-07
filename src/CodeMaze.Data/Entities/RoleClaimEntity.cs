using System;

namespace CodeMaze.Data.Entities
{
    internal class RoleClaimEntity
    {
        public Guid Id { get; set; }
        public Guid RoleId { get; set; }
        public string ClaimType { get; set; }
        public string ClaimValue { get; set; }
    }
}