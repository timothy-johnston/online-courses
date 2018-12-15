#Class name
class Employee:
    
    #Attributes
    name = "Ben"
    designation = "Sales Executive"
    salesMadeThisWeek = 6

    #Methods
    def hasAchievedTarget(self):    #self is default param, used to access attributes of class
        if self.salesMadeThisWeek >= 5:
            print("Target has been achieved")
        else:
            print("Target has not been achieved")
