class Login:
    """
    Class that generates new instances of contacts
    """
   
    def __init__(self,first_name,last_name,phone_number,email,password) :

        self.first_name = first_name
        self.last_name  = last_name
        self.phone_number = phone_number
        self.email = email
    login_list = [] #empty login list

    def save_login(self) :
        Login.login_list.append(self)
    def delete_login(self) :
        Login.login_list.remove(self)
    