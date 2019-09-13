package Service;

import Model.Patient;
import Repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class Patient_Service_Imp implements Patient_Service {
    @Autowired
    private PatientRepository patientRepository;

    public List<Patient> getPatients() {
        return patientRepository.findByNative();
    }

    public List<Patient> getPatientsByName(String name) {
        return patientRepository.findByName(name);
    }

    public Patient savePatient(Patient patient) {
        return patientRepository.save(patient);
    }


    @Override
    public Patient findById(long id) {
        return patientRepository.findById(id);
    }

    @Override
    public List<Patient> findByNameAndLastUpdateTime(String name, String lastUpdateTime) {
        return patientRepository.findByNameAndLastUpdateTimeOrderByLastUpdateTime(name, lastUpdateTime);
    }


    @Override
    public boolean isExist(String name) {
        List <Patient> list = patientRepository.findByName(name);
        if (list.size() == 0){
            return false;
        }
        else {
            return true;
        }
    }

    @Override
    public List<Patient> findByNameAndDate(String name, String lastUpdateTime) {
        return patientRepository.findByNameAndDate(name, lastUpdateTime);
    }

}
