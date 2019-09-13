package Service;

import Model.Mobile;

public interface Mobile_Service  {
    Mobile findByUuid( String uuid);
    Mobile save(Mobile mobile);
}
