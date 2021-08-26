using System.ComponentModel.DataAnnotations;

namespace reactskillsback.Models
{
    public class User
    {
        public long Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Password { get; set; }
    }
}
