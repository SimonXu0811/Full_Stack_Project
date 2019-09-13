package Controller;


import Model.Mobile;
import Model.Patient;
import Model.User;
import Service.Mobile_Service_Imp;
import Service.Patient_Service_Imp;
import Service.User_Service_Imp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(value="/api")
public class Controller {

	@Autowired
	private Patient_Service_Imp patientService;


	//patient Api
	@PostMapping("add")//create a report in mobile
	public Patient savePatient (@RequestBody Patient patient){
		return patientService.savePatient(patient);
	}

	@GetMapping("all")//show all patients in dashboard
	public List<Patient> allpatients(){
		return patientService.getPatients();
	}

	@PostMapping("update")//update report in mobile
	public Patient updatePatient (@RequestBody Patient patient){
		Patient p = new Patient();
		p = patientService.findById(patient.getId());
		p.setLastUpdateTime(patient.getLastUpdateTime());
		p.setLocation(patient.getLocation());
		p.setTime(patient.getTime());
		p.setDate(patient.getDate());
		return patientService.savePatient(p);

	}

	@GetMapping("patient/{name}")//show details for each patient
	public List<Patient> patientByName(@PathVariable("name") String name){
		return patientService.getPatientsByName(name);
	}

	@Autowired
	private User_Service_Imp userService;
	//Dashboard Api
	@GetMapping("name/{username}")
	public User getUserByUsername(@PathVariable("username") String username){
		return userService.getUserByUsername(username);
	}

	@PostMapping("login")//dashboard login
	public boolean login(ModelMap modelMap, @RequestParam String username, @RequestParam String password){
		boolean status = false;
		status = userService.checkUser(username,password);
		if(status){
			modelMap.put("username",username);
			return status;
		}else{
			modelMap.put("warning","username or password is wrong");
			return status;
		}
	}

	@GetMapping("exist")//check username is exist or not for dashboard
	public boolean exist(@RequestParam String username) {
		User user = new User();
		user = userService.getUserByUsername(username);
		if(user != null){
			return true;
		}else{
			return false;
		}

	}

	@PostMapping("user")//add user for Postman test
	public User addUser(@RequestBody User user){
		return userService.save(user);
	}

	@PostMapping("isExist")// check the username is exist or not for mobile
	public boolean isExist(ModelMap modelMap, @RequestParam String name){
		boolean status = false;
		status = patientService.isExist(name);
//		return status;
        if(status){
            modelMap.put("username",name);
            return status;
        }else{
            modelMap.put("warning","username or password is wrong");
            return status;
        }
	}

	//Mobile Api

	@GetMapping("report")//show report details for mobile
    public List<Patient> findByNameAndLastUpdateTime(@RequestParam String name, @RequestParam String lastUpdateTime){
	    return patientService.findByNameAndLastUpdateTime(name,lastUpdateTime);
    }

    @GetMapping("number")//count the number of each day for charts
	public int numbers(@RequestParam String name, @RequestParam String lastUpdateTime) {
		return patientService.findByNameAndDate(name,lastUpdateTime).size();
	}

	@Autowired
	private Mobile_Service_Imp mobileService;

	@GetMapping("mobileuser")//check username is exist or not for mobile
	public Mobile mobileuser(@RequestParam String uuid) {
//		if (mobileService.findByUuid(uuid) == null) {return "no-username"; }
//		else {return mobileService.findByUuid(uuid).getUsername(); }
        return mobileService.findByUuid(uuid);
	}

	@PostMapping("addmobile")//add uuid and username for mobile
	public Mobile addmobile (@RequestBody Mobile mobile){
		return mobileService.save(mobile);
	}



}
