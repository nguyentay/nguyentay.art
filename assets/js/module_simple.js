function df(id) {
	return window.document.getElementById(id);
}
function validatefld(fid, showerr) {
	
	window.setTimeout("checkfld('" + fid + "'," + showerr + ")", 100);
}
function checkfld(fid, showerr) {	
	var url = document.getElementById('tmpurl').value;
	
        df('img-' + fid).src = (df(fid).value == "" || df(fid).value.replace(/^\s+|\s+$/g, '') == "") ? (url + "assets/images/" + (showerr ? "incorrect.png" : "required.gif")): url + "assets/images/correct.png";
}
function validateemailfld(fid, showerr) {
	window.setTimeout("checkemailfld('" + fid + "'," + showerr + ")", 300);
}
function checkemailfld(fid, showerr) {	
	
	var url = document.getElementById('tmpurl').value;
	
	var emailStatus =  validateEmail(df(fid).value);
	if(emailStatus == 0)
		df('img-' + fid).src = url + "assets/images/correct.png";
	else if(emailStatus == -1)
		df('img-' + fid).src = url + "assets/images/" + (showerr ? "incorrect.png" : "required.gif");
	else
		df('img-' + fid).src = url + "assets/images/incorrect.png";
}

function validateEmail(email) {
	if(email == "") {
		return -1;
	}
	var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/;
	var regex = new RegExp(emailReg);
	return regex.test(email) ? 0 : -2;
}


checkflds=['firstname','lastname','email','comments']

function validate_fields(fields) {
	var i,elem;
	for (i=0; i<checkflds.length; i++) {
		elem = df(checkflds[i]);
		if (elem && (elem.value == '')) return false;
	}
	return true;
}

function formsubmit(id) {
	if (validate()) {
		frm=df(id);
		frm.submit();
	}
}

function validate() {
	if (!validate_fields()) {
		alert('Please fill in all fields marked as required.');
		return false;
	}
	return true;
}

function validatefldsicons() {
	for (i=0; i<checkflds.length; i++) {
		if (checkflds[i]=='email') {
		 checkemailfld(checkflds[i], (step==1 ? false : true));
		} else {
		 checkfld(checkflds[i], (step==1 ? false : true));
		}
	}
}
