package Service;

import Model.Mobile;
import Repository.MobileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class Mobile_Service_Imp implements Mobile_Service {
    @Autowired
    private MobileRepository mobileRepository;

    @Override
    public Mobile findByUuid(String uuid) {
        return mobileRepository.findByUuid(uuid);
    }

    @Override
    public Mobile save(Mobile mobile) {
        return mobileRepository.save(mobile);
    }


}
