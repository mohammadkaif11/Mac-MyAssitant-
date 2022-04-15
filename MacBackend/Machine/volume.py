import pyautogui
import sys
data=sys.argv[1]
if data=='volume up':
    pyautogui.press("volumeup")
    print('I Done My Job')
elif data=='volume down':
    pyautogui.press('volumedown')
    print('I Done My Job')
elif data=='volume mute':
    pyautogui.press('volumemute')
    print('I Done My Job')
else : 
    print('InterNal Error')

