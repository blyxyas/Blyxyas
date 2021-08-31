from win10toast import ToastNotifier
import time
import sys
import os

timer = int(input("When you want to be notified (In minute e.g. 40):"))
title = input("Title:")
message = input("Message:")
n = timer * 60
while n >= 0:
    time.sleep(1)
    n -= 1
    os.system('cls')
    print(f"You will be notified in {n}s")
notifier = ToastNotifier()
notifier.show_toast(title, message)
sys.exit()