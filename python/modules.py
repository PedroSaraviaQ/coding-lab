# autopep8: off

# * importing modules
import math
print(math.exp(2))

# * importing submodules
from math import e, log
print(log(e))
#! Incorrect
# import math.e

# * importing with aliases
import math as m
from math import factorial as f
print(m.sqrt(256))
print(f(5))

# * importing every submodule
from math import *
print(pi)
#! Incorrect
# import math as *