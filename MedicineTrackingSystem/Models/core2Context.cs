using MedicineTrackingSystem;
using Microsoft.EntityFrameworkCore;

namespace EFNgApp.Models
{
    public partial class core2Context : DbContext
    {
        public virtual DbSet<MedicineTrackingInfo> medicinetrackinginfo { get; set; }
		public static string GetConnectionString()
		{
			return Startup.ConnectionString;
		}
		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
           // #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer(GetConnectionString());
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<MedicineTrackingInfo>(entity =>
            {
                entity.HasKey(e => e.ID);
                entity.ToTable("MedicineTrackingInfo");

                entity.Property(e => e.ID)
                    .IsRequired()
                    .HasMaxLength(4)
                    .IsUnicode(false);

                entity.Property(e => e.MedicineName)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Brand)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.price)
                    .IsRequired()
                    .HasMaxLength(6)
                    .IsUnicode(false);

                entity.Property(e => e.Quantity)
                   .IsRequired()
                   .HasMaxLength(4)
                   .IsUnicode(false);

                entity.Property(e => e.ExpiryDate)
                    .IsRequired()
                    .HasMaxLength(20)
                     .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });
        }
    }
}
