package Service;

import Model.User;

public interface User_Service {
    User save(User user);
    User getUserByUsername(String username);
    User getUserByPassword(String password);
    boolean checkUser(String username, String password);
}
