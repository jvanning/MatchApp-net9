using System;

namespace API.Entities;

public class Message
{
    public int Id { get; set; }
    public required string SendUsername { get; set; }
    public required string RecipientUsername { get; set; }
    public required string Content { get; set; }
    public DateTime? DateRead { get; set; }
    public DateTime MessageSent { get; set; } = DateTime.Now;
    public bool SenderDeleted { get; set; }
    public bool RecipientDetleted { get; set; }

    //navigation props
    public int SendId { get; set; }
    public AppUser Sender { get; set; } =null!;
    public int RecipientId { get; set; }
    public AppUser Recipient { get; set; } = null!;


}
