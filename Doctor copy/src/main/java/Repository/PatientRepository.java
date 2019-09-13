package Repository;

import Model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PatientRepository extends JpaRepository<Patient, Long> {
    List<Patient> findByName(String name);
    List<Patient> findByNameAndLastUpdateTimeOrderByLastUpdateTime(String name, String lastUpdateTime);
    Patient findById(long id);
    List<Patient> findByNameAndDate(String name, String date);

   @Query(value = "SELECT ANY_VALUE(id) as id, ANY_VALUE(date) as date, max(lastUpdateTime) as lastUpdateTime, ANY_VALUE(location) as location,  ANY_VALUE(name) as name, ANY_VALUE(time) as time  FROM `patient1` GROUP BY name ORDER BY lastUpdateTime" , nativeQuery = true)
    List<Patient> findByNative();

}
