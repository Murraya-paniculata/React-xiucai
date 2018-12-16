const vfilter = {
  phoneHideMiddle(val) {
    if(val){
      return `${val.substring(0,3)}****${val.substring(val.length-4)}`
    }
    else{
      return "";
    }

  }
}

export default vfilter;
