checkSession();function logStuff(UN,UID,TheMessage)
{if(window.XMLHttpRequest)
{xmlhttp=new XMLHttpRequest();}
else
{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(xmlhttp.readyState==4&&xmlhttp.status==200)
{}}
xmlhttp.open("POST","/shared"+envir+"/php/writeStuff.php",true);xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");xmlhttp.send("UN="+UN+"&UID="+UID+"&TheMessage="+TheMessage);}
function UserLogIn(UserName)
{user=UserName;}
function UserLogOut()
{user="false";if(window.XMLHttpRequest)
{xmlhttp=new XMLHttpRequest();}
else
{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(xmlhttp.readyState==4&&xmlhttp.status==200)
{if(typeof(login_required)!=="undefined")
{if(login_required==true){window.location.href="../geography"+envir+"/index.php";}
else{window.location.reload(false);}}
else window.location.reload(false);}}
xmlhttp.open("POST","/shared"+envir+"/php/end-session.php",true);xmlhttp.send();}
function checkSession()
{if(window.XMLHttpRequest)
{xmlhttp=new XMLHttpRequest();}
else
{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(xmlhttp.readyState==4&&xmlhttp.status==200)
{if(xmlhttp.responseText!=="false")
{UserLogIn(xmlhttp.responseText);}
else if(typeof(login_required)!=="undefined")
{if(login_required==true)
window.location.href="/shared"+envir+"/signin.php";}
else
{}}}
xmlhttp.open("POST","/shared"+envir+"/php/get-session.php",true);xmlhttp.send();}
function validPw()
{var inputsFilled=true;updtScreen("oldpw","");updtScreen("newpw","");updtScreen("newpw2","");if(document.pwinput.oldpassword.value=="")
{updtScreen("oldpw","x must be filled");inputsFilled=false;}
if(document.pwinput.newpassword.value=="")
{updtScreen("newpw","x must be filled");inputsFilled=false;}
else if(/[^a-zA-Z0-9\`\~\!\@\#\$\%\^\&\*\(\)\_\-\+\=\{\}\[\]\\\|\:\;\"\'\<\>\,\.\?\/]/.test(document.pwinput.newpassword.value))
{updtScreen("newpw","x valid characters are alphanumeric and special characters, no spaces");inputsFilled=false;}
else if(document.pwinput.newpassword.value.length<6)
{updtScreen("newpw","x too short (6 char)");inputsFilled=false;}
else if(document.pwinput.newpassword.value==document.pwinput.oldpassword.value)
{updtScreen("newpw","x must be different from current password");inputsFilled=false;}
if(document.pwinput.newpassword2.value!==document.pwinput.newpassword.value)
{updtScreen("newpw2","x must match new password");inputsFilled=false;}
if(inputsFilled==true)
ChangePassword();}
function validClassPw()
{var inputsFilled=true;updtScreen("currpwmsg","");updtScreen("newclasspwmsg","");updtScreen("newclasspw2msg","");if(document.classpwinput.currpassword.value=="")
{updtScreen("currpwmsg","x your password must be filled in");inputsFilled=false;}
if(document.classpwinput.newclasspassword.value=="")
{updtScreen("newclasspwmsg","x new class password must be filled");inputsFilled=false;}
else if(/[^a-zA-Z0-9\`\~\!\@\#\$\%\^\&\*\(\)\_\-\+\=\{\}\[\]\\\|\:\;\"\'\<\>\,\.\?\/]/.test(document.classpwinput.newclasspassword.value))
{updtScreen("newclasspwmsg","x valid characters are alphanumeric and special characters, no spaces");inputsFilled=false;}
else if(document.classpwinput.newclasspassword.value.length<6)
{updtScreen("newclasspwmsg","x new password is too short (must be at least 6 chars)");inputsFilled=false;}
if(document.classpwinput.newclasspassword2.value!==document.classpwinput.newclasspassword.value)
{updtScreen("newclasspw2msg","x must match new password");inputsFilled=false;}
if(inputsFilled==true)
ChangeClassPassword();}
function ChangePassword()
{if(window.XMLHttpRequest)
{xmlhttp=new XMLHttpRequest();}
else
{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(xmlhttp.readyState==4&&xmlhttp.status==200)
{if(xmlhttp.responseText=="")
{updtScreen("oldpw","");updtScreen("newpw","");updtScreen("newpw2","");updtScreen("pwupdate","Your password has been changed.");document.pwinput.reset();}
else
updtScreen("oldpw",xmlhttp.responseText);}}
xmlhttp.open("POST","/shared"+envir+"/php/change-password.php",true);xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");xmlhttp.send("oldpw="+document.pwinput.oldpassword.value+"&newpw="+document.pwinput.newpassword.value);}
function ChangeClassPassword()
{if(window.XMLHttpRequest)
{xmlhttp=new XMLHttpRequest();}
else
{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(xmlhttp.readyState==4&&xmlhttp.status==200)
{var trimmedResponse=xmlhttp.responseText.replace(/^\s*/,'').replace(/\s*$/,'').toLowerCase();if(trimmedResponse=="")
{updtScreen("currpwmsg","");updtScreen("newclasspwmsg","");updtScreen("newclasspw2msg","");updtScreen("classpwupdatemsg","The class password has been changed.");document.classpwinput.reset();}
else{updtScreen("classpwupdatemsg","");updtScreen("currpwmsg",xmlhttp.responseText);}}}
xmlhttp.open("POST","/shared"+envir+"/php/change-class-password.php",true);xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");xmlhttp.send("currpassword="+document.classpwinput.currpassword.value+"&newclasspw="+document.classpwinput.newclasspassword.value);}
function ChangeEmail()
{if(window.XMLHttpRequest)
{xmlhttp=new XMLHttpRequest();}
else
{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(xmlhttp.readyState==4&&xmlhttp.status==200)
{if(xmlhttp.responseText=="")
{updtScreen("pw","");updtScreen("newe","");updtScreen("newe2","");updtScreen("eupdate","Your email has been changed and a confirmation has been sent to your old and new address.");updtScreen("current_email",document.einput.newemail.value);document.einput.reset();}
else
if(xmlhttp.responseText=='x incorrect password')
{updtScreen("pw",xmlhttp.responseText);}
else{updtScreen("newe",xmlhttp.responseText);}}}
xmlhttp.open("POST","/shared"+envir+"/php/change-email.php",true);xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");xmlhttp.send("password="+document.einput.pass.value+"&email="+document.einput.newemail.value);}
function validEmail()
{var inputsFilled=true;var x=document.einput.newemail.value;var atpos=x.indexOf("@");var dotpos=x.lastIndexOf(".");updtScreen("pw","");updtScreen("newe","");updtScreen("newe2","");if(document.einput.newemail.value=="")
{updtScreen("newe","x new email must be filled in");inputsFilled=false;}
else if(atpos<1||dotpos<atpos+2||dotpos+2>=x.length)
{updtScreen("newe","x invalid email");inputsFilled=false;}
curMail=document.getElementById('current_email').innerHTML;if(document.einput.newemail.value==curMail)
{updtScreen("newe","x this is the same as your current email address");inputsFilled=false;}
if(document.einput.newemail2.value!==document.einput.newemail.value)
{updtScreen("newe2","x must match new email");inputsFilled=false;}
if(document.einput.pass.value=="")
{updtScreen("pw","x password must be filled in");inputsFilled=false;}
if(inputsFilled==true)
ChangeEmail();}
function ResendLink(user_name)
{if(window.XMLHttpRequest)
{xmlhttp=new XMLHttpRequest();}
else
{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(xmlhttp.readyState==4&&xmlhttp.status==200)
{updtScreen("login_confirm",xmlhttp.responseText);updtScreen("login_error","");}}
xmlhttp.open("POST","/shared"+envir+"/php/send-email.php",true);xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");xmlhttp.send("user_name="+user_name);}
function filterLetters(event)
{var keyCode=('which'in event)?event.which:event.keyCode;if((keyCode>=48&&keyCode<=57)||(keyCode>=96&&keyCode<=105)||(keyCode==8))
return true;else
return false;}
function validThresh()
{var entry=document.passinput.threshold.value;if(entry=="")
{updtScreen("threshsuccess","");updtScreen("threshfail","Field is empty.");}
else if(isNaN(entry))
{updtScreen("threshsuccess","");updtScreen("threshfail","Not a number.");}
else if(entry<50||entry>100)
{updtScreen("threshsuccess","");updtScreen("threshfail","Out of bounds (50-100)");}
else
{setThreshold();updtScreen("threshfail","");updtScreen("threshsuccess","Pass threshold updated.");}}
function setThreshold()
{if(window.XMLHttpRequest)
{xmlhttp=new XMLHttpRequest();}
else
{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(xmlhttp.readyState==4&&xmlhttp.status==200)
{updtScreen("current_thresh",document.passinput.threshold.value);}}
xmlhttp.open("POST","/shared"+envir+"/php/update-threshold.php",true);xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");xmlhttp.send("threshold="+document.passinput.threshold.value);}
function sendLogin()
{var xmlhttp;if(window.XMLHttpRequest)
{xmlhttp=new XMLHttpRequest();}
else
{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(xmlhttp.readyState==4&&xmlhttp.status==200)
{if(xmlhttp.responseText==document.loginput.user_name.value)
{UserLogIn(document.loginput.user_name.value);if(document.getElementById('last_url').innerHTML=='true'){window.history.back();}
else{window.location.href="../geography"+envir+"/index.php";}
updtScreen("login_error","");updtScreen("login_confirm","You have logged on.");}
else
{updtScreen("login_confirm","");updtScreen("login_error",xmlhttp.responseText);}}}
xmlhttp.open("POST","/shared"+envir+"/php/check-login.php",true);xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");xmlhttp.send("user_name="+document.loginput.user_name.value+"&password="+document.loginput.password.value);}
function validateStudents()
{var reg=true;updtScreen("invalid_prefix","");updtScreen("invalid_num_students","");updtScreen("invalid_password","");updtScreen("invalid_password2","");if(document.input.prefix.value=="")
{updtScreen("invalid_prefix","x Prefix must be filled in");reg=false;}
else if(document.input.prefix.value.length<4)
{updtScreen("invalid_prefix","x Prefix too short (min. 4 char)");reg=false;}
if(document.input.password.value=="")
{updtScreen("invalid_password","x must be filled in");reg=false;}
else if(document.input.password.value.length<6)
{updtScreen("invalid_password","x too short (6 char)");reg=false;}
else if(/[^a-zA-Z0-9\`\~\!\@\#\$\%\^\&\*\(\)\_\-\+\=\{\}\[\]\\\|\:\;\"\'\<\>\,\.\?\/]/.test(document.input.password.value))
{updtScreen("invalid_password","x Valid characters are alphanumeric and special characters, no spaces");reg=false;}
if(document.input.password.value!==document.input.password2.value)
{updtScreen("invalid_password2","x Must match password");reg=false;}
if(reg==true)
{callToCreateStudents();}}
function validate()
{var x=document.input.email.value;var atpos=x.indexOf("@");var dotpos=x.lastIndexOf(".");var reg=true;updtScreen("invalid_user_name","");updtScreen("invalid_email","");updtScreen("invalid_password","");updtScreen("invalid_password2","");updtScreen("invalid_terms","");updtScreen("register_confirm","");if(document.input.user_name.value=="")
{updtScreen("invalid_user_name","x must be filled in");reg=false;}
else if(document.input.user_name.value.length<4)
{updtScreen("invalid_user_name","x too short (4 char)");reg=false;}
if(document.input.email.value=="")
{updtScreen("invalid_email","x must be filled in");reg=false;}
else if(atpos<1||dotpos<atpos+2||dotpos+2>=x.length)
{updtScreen("invalid_email","x invalid email");reg=false;}
if(document.input.password.value=="")
{updtScreen("invalid_password","x must be filled in");reg=false;}
else if(document.input.password.value.length<6)
{updtScreen("invalid_password","x too short (6 char)");reg=false;}
else if(/[^a-zA-Z0-9\`\~\!\@\#\$\%\^\&\*\(\)\_\-\+\=\{\}\[\]\\\|\:\;\"\'\<\>\,\.\?\/]/.test(document.input.password.value))
{updtScreen("invalid_password","x valid characters are alphanumeric and special characters, no spaces");reg=false;}
if(document.input.password.value!==document.input.password2.value)
{updtScreen("invalid_password2","x must match password");reg=false;}
if(document.input.terms.checked==false)
{updtScreen("invalid_terms","x required");reg=false;}
if(reg==true)
{loadRegister();}}
function validateNewUser()
{var x=document.input.email.value;var atpos=x.indexOf("@");var dotpos=x.lastIndexOf(".");var reg=true;updtScreen("invalid_user_name","");updtScreen("invalid_email","");updtScreen("invalid_email2","");updtScreen("invalid_password","");updtScreen("invalid_password2","");updtScreen("invalid_terms","");updtScreen("invalid_schoolname","");updtScreen("register_confirm","");updtScreen("general_error","");if(document.input.user_name.value=="")
{updtScreen("invalid_user_name","x must be filled in");reg=false;}
else if(document.input.user_name.value.length<4)
{updtScreen("invalid_user_name","x too short (4 char)");reg=false;}
if(document.input.user_name.value.substring(0,2)=='s.'){updtScreen("invalid_user_name","x Students that have been assigned a user name starting with 's.' should use the sign in form at the top of the screen.");reg=false;}
else{if(/[^a-zA-Z0-9_]/.test(document.input.user_name.value)){updtScreen("invalid_user_name","x User name can only contain letters a-z, numbers 0-9 and _");reg=false;}}
if(document.input.email.value=="")
{updtScreen("invalid_email","x must be filled in");reg=false;}
else if(atpos<1||dotpos<atpos+2||dotpos+2>=x.length)
{updtScreen("invalid_email","x invalid email");reg=false;}
if(document.input.email.value!==document.input.email2.value)
{updtScreen("invalid_email2","x must match email");reg=false;}
if(document.input.password.value=="")
{updtScreen("invalid_password","x must be filled in");reg=false;}
else if(document.input.password.value.length<6)
{updtScreen("invalid_password","x too short (6 char)");reg=false;}
else if(/[^a-zA-Z0-9\`\~\!\@\#\$\%\^\&\*\(\)\_\-\+\=\{\}\[\]\\\|\:\;\"\'\<\>\,\.\?\/]/.test(document.input.password.value))
{updtScreen("invalid_password","x valid characters are alphanumeric and special characters, no spaces");reg=false;}
if(document.input.password.value!==document.input.password2.value)
{updtScreen("invalid_password2","x must match password");reg=false;}
if(document.input.terms.checked==false)
{updtScreen("invalid_terms","x required");reg=false;}
if(document.input.teacher.checked==true)
{if(document.input.schoolname.value=='')
{updtScreen("invalid_schoolname","x required");reg=false;}
else{if(/[^a-zA-Z-\s\.\']/.test(document.input.schoolname.value)){updtScreen("invalid_schoolname","x School name can only contain letters a-z, '. - and space");reg=false;}}}
else{document.input.schoolname.value='';updtScreen("invalid_schoolname","");}
if(reg==true)
{loadRegisterNewUser();}}
function callToCreateStudents()
{var xmlhttp;if(window.XMLHttpRequest)
{xmlhttp=new XMLHttpRequest();}
else
{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(xmlhttp.readyState==4&&xmlhttp.status==200)
{var trimmedResponse=xmlhttp.responseText.replace(/^\s*/,'').replace(/\s*$/,'');if(trimmedResponse==document.input.user_name.value)
{updtScreen("register_confirm","Student records have been created. You're good to go!");document.input.reset();}
else
{if(xmlhttp.responseText=="x email already in use")
updtScreen("invalid_email",xmlhttp.responseText);else
updtScreen("invalid_user_name",xmlhttp.responseText);}}}
xmlhttp.open("POST","/shared"+envir+"/php/create-students.php",true);xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");xmlhttp.send("prefix="+document.input.prefix.value+"&password="+document.input.password.value+"&num_students="+document.input.num_students.value);}
function loadRegisterNewUser()
{var xmlhttp;if(window.XMLHttpRequest)
{xmlhttp=new XMLHttpRequest();}
else
{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(xmlhttp.readyState==4&&xmlhttp.status==200)
{arrResult=xmlhttp.responseText.split(";");overallResult=arrResult[0].split(',');if(overallResult[0]==0)
{updtScreen("register_confirm","You have successfully registered. Go to your email and use the link we have sent you to activate your account. You may have to look in your spam or junk mail folder.");document.input.reset();}
else
for(i=0;i<arrResult.length;i++)
{dtlResult=arrResult[i].split(',');if(dtlResult[1]=='email')updtScreen("invalid_email",dtlResult[2]);if(dtlResult[1]=='username')updtScreen("invalid_user_name",dtlResult[2]);if(dtlResult[1]=='general')updtScreen("general_error",dtlResult[2]);}}}
xmlhttp.open("POST","/shared"+envir+"/php/create-user.php",true);xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");if(document.input.teacher.checked==true){teacherStr="&teacher=1&schoolname="+document.input.schoolname.value;}
else teacherStr='';xmlhttp.send("user_name="+document.input.user_name.value+"&password="+document.input.password.value+"&email="+document.input.email.value+teacherStr);}
function loadRegister()
{var xmlhttp;if(window.XMLHttpRequest)
{xmlhttp=new XMLHttpRequest();}
else
{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(xmlhttp.readyState==4&&xmlhttp.status==200)
{if(xmlhttp.responseText==document.input.user_name.value)
{updtScreen("register_confirm","You have successfully registered. Go to your email and use the link we have sent you to activate your account. You may have to look in your spam or junk mail folder.");document.input.reset();}
else
{if(xmlhttp.responseText=="x email already in use")
updtScreen("invalid_email",xmlhttp.responseText);else
updtScreen("invalid_user_name",xmlhttp.responseText);}}}
xmlhttp.open("POST","/shared"+envir+"/php/create-user.php",true);xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");xmlhttp.send("user_name="+document.input.user_name.value+"&password="+document.input.password.value+"&email="+document.input.email.value);}
function NotifyOption()
{if(window.XMLHttpRequest)
{xmlhttp=new XMLHttpRequest();}
else
{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(xmlhttp.readyState==4&&xmlhttp.status==200)
{updtScreen("notifyupdate","Your notification options have been updated.");updtScreen("notifyval",xmlhttp.responseText);toggleDisplay('buttonOn');toggleDisplay('buttonOff');}}
xmlhttp.open("POST","/shared"+envir+"/php/update-notify.php",true);xmlhttp.send();}
function toSignIn()
{if(window.XMLHttpRequest)
{xmlhttp=new XMLHttpRequest();}
else
{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(xmlhttp.readyState==4&&xmlhttp.status==200)
{window.location.href="/shared"+envir+"/signin.php";}}
xmlhttp.open("POST","/shared"+envir+"/php/set-return.php",true);xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");xmlhttp.send("url="+document.URL);}
function updateQuizDetails(field)
{hideDiv("geotable");hideDiv("flgtable");hideDiv("peotable");hideDiv("arttable");hideDiv("geotrivtable");showDiv(field+"table");}
function updtScreen(id,val){if(document.getElementById(id))
{document.getElementById(id).innerHTML=val;}}
function openVisible(name){if(document.getElementById(name))
{document.getElementById(name).style.visibility="visible";}}
function closeInvisible(name){if(document.getElementById(name))
{document.getElementById(name).style.visibility="hidden";}}
function showDivInline(id){if(document.getElementById(id))
{var elem=document.getElementById(id);elem.style.display='inline';}}
function showDiv(id){if(document.getElementById(id))
{var elem=document.getElementById(id);elem.style.display='block';}}
function hideDiv(id){if(document.getElementById(id))
{var elem=document.getElementById(id);elem.style.display='none';}}
function toggleDisplay(id){if(document.getElementById(id))
{var elem=document.getElementById(id);if(elem.style.display=='none')
showDivInline(id);else
hideDiv(id);}}
function checkform()
{for(i=0;i<fieldstocheck.length;i++){if(eval("document.subscribeform.elements['"+fieldstocheck[i]+"'].type")=="checkbox"){if(document.subscribeform.elements[fieldstocheck[i]].checked){}else{alert("Please enter your "+fieldnames[i]);eval("document.subscribeform.elements['"+fieldstocheck[i]+"'].focus()");return false;}}else{if(eval("document.subscribeform.elements['"+fieldstocheck[i]+"'].value")==""){alert("Please enter your "+fieldnames[i]);eval("document.subscribeform.elements['"+fieldstocheck[i]+"'].focus()");return false;}}}
for(i=0;i<groupstocheck.length;i++){if(!checkGroup(groupstocheck[i],groupnames[i])){return false;}}
return true;}
var fieldstocheck=new Array();var fieldnames=new Array();function addFieldToCheck(value,name)
{fieldstocheck[fieldstocheck.length]=value;fieldnames[fieldnames.length]=name;}
var groupstocheck=new Array();var groupnames=new Array();function addGroupToCheck(value,name)
{groupstocheck[groupstocheck.length]=value;groupnames[groupnames.length]=name;}
function compareEmail()
{return(document.subscribeform.elements["email"].value==document.subscribeform.elements["emailconfirm"].value);}
function checkGroup(name,value)
{option=-1;for(i=0;i<document.subscribeform.elements[name].length;i++){if(document.subscribeform.elements[name][i].checked){option=i;}}
if(option==-1){alert("Please enter your "+value);return false;}
return true;}
function popupCenter(w,h,winname){var left=(screen.width/2)-(w/2);var top=(screen.height/2)-(h/2);if(winname=='')winname='new';return window.open('',winname,'dialog,modal,scrollbars=no,resizable=no,width='+w+',height='+h+',top='+top+',left='+left);}
function saveFave(){fave_ctr++;if(fave_ctr>=fave_limit){alert("The star feature has been temporarily disabled due to spamming.");}
else{if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}
else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4&&xmlhttp.status==200){alert("Quiz saved to your favourites.");document.getElementById('fave').href='javascript:unsaveFave();';updtScreen('fave',"<img class='fave_saved' src='images/spacer.gif' title='click to remove from your favorite quizzes'>");}}
locn="../shared"+envir+"/php/save-fav.php";xmlhttp.open("POST",locn,true);xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");if(typeof qid=='undefined'){xmlhttp.send("quiz="+id+"&cust_quiz_id=0");}
else{xmlhttp.send("quiz="+id+"&cust_quiz_id="+qid);}}}
function unsaveFave(){fave_ctr++;if(fave_ctr>=fave_limit){alert("The star feature has been temporarily disabled due to spamming.");}
else{if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}
else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4&&xmlhttp.status==200){alert("Quiz removed from your favourites.");document.getElementById('fave').href='javascript:saveFave();';updtScreen('fave',"<img class='fave_unsaved' src='images/spacer.gif' title='click to save as favorite quiz'>");}}
locn="../shared"+envir+"/php/unsave-fav.php";xmlhttp.open("POST",locn,true);xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");if(typeof qid=='undefined'){xmlhttp.send("quiz="+id);}
else{xmlhttp.send("quiz="+id+"&cust_quiz_id="+qid);}}}