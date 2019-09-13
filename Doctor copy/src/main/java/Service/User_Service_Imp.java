package Service;

import Model.User;
import Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class User_Service_Imp implements User_Service {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User getUserByUsername(String  username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public User getUserByPassword(String password) {
        return userRepository.findByPassword(password);
    }

    @Override
    public boolean checkUser(String username, String password) {
        User temp = userRepository.findByUsername(username);
        if(temp != null){
            if (temp.getPassword().equals(password)){
                return true;
            }
            return false;
        }
        return false;
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }


}

