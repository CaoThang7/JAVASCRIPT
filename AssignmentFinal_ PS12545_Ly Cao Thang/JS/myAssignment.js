var app=angular.module('myApp',[]);
app.controller('myController',function($scope){
    $scope.thang=[
        {
          'tenSP':'iPhone 9',
          'soLuong':0,
          'donGia':700,
          'isBuy':false
        },
        {
            'tenSP':'SamSung',
            'soLuong':0,
            'donGia':400,
            'isBuy':false
        },
        {
            'tenSP':'Nokia',
            'soLuong':0,
            'donGia':100,
            'isBuy':false
        },
        {
            'tenSP':'Sony Xperia',
            'soLuong':0,
            'donGia':450,
            'isBuy':false
        },
        {
            'tenSP':'Motorola',
            'soLuong':0,
            'donGia':180,
            'isBuy':false
        },
        {
            'tenSP':'Oppo',
            'soLuong':0,
            'donGia':600,
            'isBuy':false
        },
        {
            'tenSP':'bPhone',
            'soLuong':0,
            'donGia':90,
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