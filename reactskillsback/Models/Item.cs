using System.ComponentModel.DataAnnotations;


namespace reactskillsback.Models
{
    public class Item
    {
        public long Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Text { get; set; }
        public bool IsChecked { get; set; }
    }
}
