using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EFNgApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace MedicineTrackingSystem.Controllers
{
    [ApiController]
    [Route("[controller]")]
	public class MedicalTrackingInfoController : Controller
	{
		MedicineDataAccessLayer objmedicines = new MedicineDataAccessLayer();

		[HttpGet]
		[Route("api/Medicine/Index")]
		public IEnumerable<MedicineTrackingInfo> Get()
		{
			return objmedicines.GetAllMedicinesList();
		}

		[HttpPost]
		[Route("api/Medicine/Create")]
		public int Create([FromBody] MedicineTrackingInfo medicine)
		{
			return objmedicines.AddMedices(medicine);
		}

		[HttpGet]
		[Route("api/Medicine/Details/{id}")]
		public MedicineTrackingInfo Details(int id)
		{
			return objmedicines.GetMedicineData(id);
		}
		[HttpPut]
		[Route("api/Medicine/Edit")]
		public int Edit([FromBody] MedicineTrackingInfo medicine)
		{
			return objmedicines.UpdateMedicine(medicine);
		}

		[HttpDelete]
		[Route("api/Medicine/Delete/{id}")]
		public int Delete(int id)
		{
			return objmedicines.DeleteMedicine(id);
		}
	}
}
