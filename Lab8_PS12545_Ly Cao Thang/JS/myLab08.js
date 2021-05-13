var app=angular.module('myApp',[]);
app.controller('myController',function($scope){
    $scope.thang=[
        {
          'tenSP':'Nước giải khác',
          'soLuong':0,
          'donGia':8000,
          'isBuy':false
        },
        {
            'tenSP':'Cà phê',
            'soLuong':0,
            'donGia':12000,
            'isBuy':false
        },
        {
            'tenSP':'thuốc lá',
            'soLuong':0,
            'donGia':20000,
            'isBuy':false
        },
    ];
    $scope.tinhTong=function(){
        var s=0;
        $scope.thang.forEach(p => {
            if(p.isBuy){
                s=s+p.soLuong*p.donGia;
            }
        });
        return s;
    }
})