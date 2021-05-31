import unittest
from login import Login

class TestLogin(unittest.TestCase) :
    def setup(self):
        """
        set up method to run before each test class
        """

        self.new_login = Login("Stella","Ngina","0726091916","sngina707@gmail.com")
    def test_init(self):
        """
        test case to test if the object is iniatialized properly
        """
        self.assertEqual(self.new_login.first_name,"Stella")
        self.assertEqual(self.new_login.last_name,"Ngina")
        self.assertEqual(self.new_login.phone_number,"0726091916")
        self.assertEqual(self.new_login,"sngina707@gmail.com")
if  __name__ =='__main__':
    unittest.main()