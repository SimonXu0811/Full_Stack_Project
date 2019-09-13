package Repository;

import Model.Mobile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MobileRepository extends JpaRepository<Mobile, Long> {

    Mobile findByUuid(String uuid);
}
