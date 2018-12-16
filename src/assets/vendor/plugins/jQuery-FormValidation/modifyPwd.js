(function($){
	 $.fn.extend({
	 	"checkForm":function(options){
	 		var root=this; //当前应用对象存入root
	 		var isok=false; //控制表单提交的开关
	 		var defaults={

	 			// 提示信息
	 			tip_success:'', //验证成功提示
	 			tip_required:'不能为空', 
	 			tip_idCard:'身份证号格式不正确',
	 			tip_code:'验证码格式不正确',
	 			tip_password:'密码为6-16位数字、字母组合',
	 			tip_phone:'手机号格式不正确',


	 			// 正则验证
	 			reg_chinese:/^[\u4E00-\u9FA5]{1,20}$/,
	 			reg_password:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/,
	 			reg_idCard:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
	 			reg_code:/^\d{6}$/,
	 			reg_phone:/^1(3|4|5|7|8)\d{9}$/
	 		
	 		}

	 		if(options){        //如果不为空就合并参数
	 			$.extend(defaults,options)
	 		}

	 		// 文本框失去焦点时验证
	 		$(":input",root).each(function(){
	 			$(this).blur(function(){
	 				var _validate=$(this).attr("check");
	 				if(_validate){
	 					var arr=_validate.split(" ");
	 					for(var i=0;i<arr.length;i++){
	 						check($(this),arr[i],$(this).val())
	 					}
	 				}
	 			})
	 		})
			var trueList = "";
	 		//表单提交时验证
	 		function _onSubmit(){
                isok = false;
	 			trueList = "";
	 			$(":input",root).each(function(){
	 				var _validate=$(this).attr("check");
	 				if(_validate){
	 					var arr=_validate.split(" ");
	 					for(var i=0;i<arr.length;i++){
	 						if(check($(this),arr[i],$(this).val()) == true){
	 							trueList += "1";
	 						};
	 					}
	 				}
	 			});
	 			if(trueList == "111111" || trueList == "1111"){
	 				isok = true;
	 			}
	 		}
	 		//修改密码请求
	 		$(".btn").click(function(){
				_onSubmit();
				if(isok == true){
					modifyPwd();
				}
			})
	 		// 验证方法
	 		var check=function(obj,_match,_val){
	 			switch(_match){
	 				case 'required':
	 					return _val?showMsg(obj,defaults.tip_success,true):showMsg(obj,defaults.tip_required,false);
	 				case 'idCard':
	 				if($("input[name=idNum]").val() == ""){
	 					return _val?showMsg(obj,defaults.tip_success,true):showMsg(obj,"身份证号" + defaults.tip_required,false);
	 				}else{
	 					return chk(_val,defaults.reg_idCard)?showMsg(obj,defaults.tip_success,true):showMsg(obj,defaults.tip_idCard,false);
	 				}
	 				case 'phone':
	 				if($("input[name=phone]").val() == ""){
	 					return _val?showMsg(obj,defaults.tip_success,true):showMsg(obj,"手机号" + defaults.tip_required,false);
	 				}else{
	 					return chk(_val,defaults.reg_phone)?showMsg(obj,defaults.tip_success,true):showMsg(obj,defaults.tip_phone,false);
	 				}	
	 				case 'code':
	 					if($("input[name=code]").val() == ""){
	 					return _val?showMsg(obj,defaults.tip_success,true):showMsg(obj,"验证码" + defaults.tip_required,false);
	 				}else{
	 					return chk(_val,defaults.reg_code)?showMsg(obj,defaults.tip_success,true):showMsg(obj,defaults.tip_code,false);
	 				}
	 				case 'password':
	 				if($("input[name=password]").val() == ""){
	 					return _val?showMsg(obj,defaults.tip_success,true):showMsg(obj,"密码" + defaults.tip_required,false);
	 				}else{
	 					return chk(_val,defaults.reg_password)?showMsg(obj,defaults.tip_success,true):showMsg(obj,defaults.tip_password,false);
	 				}			
	 				defaults:
	 					return true;
	 			}
	 		};

	 		//正则验证
	 		var chk=function(str,reg){
	 			return reg.test(str);
	 		};

	 		//显示信息
	 		var showMsg=function(obj,msg,mark){
	 			$(obj).next("#errormsg").remove();
	 			if(mark == false){
	 				var _html="<span id='errormsg' style='font-size:12px;color:red;'><a href='javascript:;' class='first floatL'></a><a href='javascript:;' class='floatL'>"+msg+"</a></span>"
	 			}else{
	 				var _html= "<span id='errormsg' style='font-size:12px;color:red;'><span></span></span>"
	 			}	 			
	 			$(obj).after(_html);
	 			return mark;
	 		}

	 	}
	 })
})(jQuery);