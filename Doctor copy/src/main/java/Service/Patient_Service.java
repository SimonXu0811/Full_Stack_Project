package Service;

import Model.Patient;

import java.util.List;

public interface Patient_Service {
    List<Patient> getPatients();
    List<Patient> getPatientsByName(String name);
    Patient savePatient(Patient patient);
    boolean isExist(String name);
    List<Patient> findByNameAndDate(String name, String date);
    Patient findById (long id);
    List<Patient> findByNameAndLastUpdateTime(String name, String lastUpdateTime);
}
