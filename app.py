# print("hello world")

def are_anagrams(str1, str2):
    clean_str1 = str1.lower().replace(" ", "")
    clean_str2 = str2.lower().replace(" ", "")
    
    return sorted(clean_str1) == sorted(clean_str2)

print(are_anagrams("olma", "mola"))  
 