var appRegister=new Vue(
{
    el:"#form-register",
    data:
    {
        password:"",
        re_password:""
    },
    methods:
    {
        register:function(event)
        {
            if(this.password!=this.re_password)
            {
                event.preventDefault();
                return;
            }
        }
    }
});
