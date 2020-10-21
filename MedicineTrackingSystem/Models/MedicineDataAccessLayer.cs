using MedicineTrackingSystem;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EFNgApp.Models
{
    public class MedicineDataAccessLayer
	{
		core2Context db = new core2Context();
		public IEnumerable<MedicineTrackingInfo> GetAllMedicinesList()
		{
			try
			{
				return db.medicinetrackinginfo.ToList();
			}
			catch
			{
				throw;
			}

		}
		//To Add new medicine record   
		public int AddMedices(MedicineTrackingInfo medicine)
		{
			try
			{
				db.medicinetrackinginfo.Add(medicine);
				db.SaveChanges();
				return 1;
			}
			catch
			{
				throw;
			}
		}

		//To Update the records of a particluar medicine  
		public int UpdateMedicine(MedicineTrackingInfo medicine)
		{
			try
			{
				db.Entry(medicine).State = EntityState.Modified;
				db.SaveChanges();

				return 1;
			}
			catch
			{
				throw;
			}
		}

		//Get the details of a particular medicine  
		public MedicineTrackingInfo GetMedicineData(int id)
		{
			try
			{
				MedicineTrackingInfo medicine = db.medicinetrackinginfo.Find(id);
				return medicine;
			}
			catch
			{
				throw;
			}
		}

		//To Delete the record of a particular medicine  
		public int DeleteMedicine(int id)
		{
			try
			{
				MedicineTrackingInfo med = db.medicinetrackinginfo.Find(id);
				db.medicinetrackinginfo.Remove(med);
				db.SaveChanges();
				return 1;
			}
			catch
			{
				throw;
			}
		}
	}
}
