using System;

namespace MedicineTrackingSystem
{
    public partial class MedicineTrackingInfo
    {
        public int ID { get; set; }
        public string MedicineName { get; set; }
        public string Brand { get; set; }
        public double price { get; set; }
        public int Quantity { get; set; }
        public DateTime ExpiryDate { get; set; }
        public string Notes { get; set; }
    }
}
