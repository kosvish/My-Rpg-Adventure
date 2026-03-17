gdjs.WinScreenCode = {};
gdjs.WinScreenCode.localVariables = [];
gdjs.WinScreenCode.idToCallbackMap = new Map();
gdjs.WinScreenCode.GDbgObjects1= [];
gdjs.WinScreenCode.GDbgObjects2= [];
gdjs.WinScreenCode.GD_951055_951086_951079_951076_951088_951072_951074_951083_951077_951085_951080_951077Objects1= [];
gdjs.WinScreenCode.GD_951055_951086_951079_951076_951088_951072_951074_951083_951077_951085_951080_951077Objects2= [];
gdjs.WinScreenCode.GD_951048_951085_951092_951086_951088_951084_951072_951094_951080_951103Objects1= [];
gdjs.WinScreenCode.GD_951048_951085_951092_951086_951088_951084_951072_951094_951080_951103Objects2= [];
gdjs.WinScreenCode.GDBackButtonObjects1= [];
gdjs.WinScreenCode.GDBackButtonObjects2= [];
gdjs.WinScreenCode.GDPlayerObjects1= [];
gdjs.WinScreenCode.GDPlayerObjects2= [];
gdjs.WinScreenCode.GD_951050_951074_951077_951089_951090UIObjects1= [];
gdjs.WinScreenCode.GD_951050_951074_951077_951089_951090UIObjects2= [];
gdjs.WinScreenCode.GDHealthUIObjects1= [];
gdjs.WinScreenCode.GDHealthUIObjects2= [];
gdjs.WinScreenCode.GD_951044_951077_951085_951100_951075_951080_951058_951077_951082_951089_951090Objects1= [];
gdjs.WinScreenCode.GD_951044_951077_951085_951100_951075_951080_951058_951077_951082_951089_951090Objects2= [];
gdjs.WinScreenCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects1= [];
gdjs.WinScreenCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects2= [];


gdjs.WinScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.WinScreenCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WinScreenCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.WinScreenCode.GDBackButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.WinScreenCode.GDBackButtonObjects1[k] = gdjs.WinScreenCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.WinScreenCode.GDBackButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Village", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(100);
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}
}

}


};

gdjs.WinScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinScreenCode.GDbgObjects1.length = 0;
gdjs.WinScreenCode.GDbgObjects2.length = 0;
gdjs.WinScreenCode.GD_951055_951086_951079_951076_951088_951072_951074_951083_951077_951085_951080_951077Objects1.length = 0;
gdjs.WinScreenCode.GD_951055_951086_951079_951076_951088_951072_951074_951083_951077_951085_951080_951077Objects2.length = 0;
gdjs.WinScreenCode.GD_951048_951085_951092_951086_951088_951084_951072_951094_951080_951103Objects1.length = 0;
gdjs.WinScreenCode.GD_951048_951085_951092_951086_951088_951084_951072_951094_951080_951103Objects2.length = 0;
gdjs.WinScreenCode.GDBackButtonObjects1.length = 0;
gdjs.WinScreenCode.GDBackButtonObjects2.length = 0;
gdjs.WinScreenCode.GDPlayerObjects1.length = 0;
gdjs.WinScreenCode.GDPlayerObjects2.length = 0;
gdjs.WinScreenCode.GD_951050_951074_951077_951089_951090UIObjects1.length = 0;
gdjs.WinScreenCode.GD_951050_951074_951077_951089_951090UIObjects2.length = 0;
gdjs.WinScreenCode.GDHealthUIObjects1.length = 0;
gdjs.WinScreenCode.GDHealthUIObjects2.length = 0;
gdjs.WinScreenCode.GD_951044_951077_951085_951100_951075_951080_951058_951077_951082_951089_951090Objects1.length = 0;
gdjs.WinScreenCode.GD_951044_951077_951085_951100_951075_951080_951058_951077_951082_951089_951090Objects2.length = 0;
gdjs.WinScreenCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects1.length = 0;
gdjs.WinScreenCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects2.length = 0;

gdjs.WinScreenCode.eventsList0(runtimeScene);
gdjs.WinScreenCode.GDbgObjects1.length = 0;
gdjs.WinScreenCode.GDbgObjects2.length = 0;
gdjs.WinScreenCode.GD_951055_951086_951079_951076_951088_951072_951074_951083_951077_951085_951080_951077Objects1.length = 0;
gdjs.WinScreenCode.GD_951055_951086_951079_951076_951088_951072_951074_951083_951077_951085_951080_951077Objects2.length = 0;
gdjs.WinScreenCode.GD_951048_951085_951092_951086_951088_951084_951072_951094_951080_951103Objects1.length = 0;
gdjs.WinScreenCode.GD_951048_951085_951092_951086_951088_951084_951072_951094_951080_951103Objects2.length = 0;
gdjs.WinScreenCode.GDBackButtonObjects1.length = 0;
gdjs.WinScreenCode.GDBackButtonObjects2.length = 0;
gdjs.WinScreenCode.GDPlayerObjects1.length = 0;
gdjs.WinScreenCode.GDPlayerObjects2.length = 0;
gdjs.WinScreenCode.GD_951050_951074_951077_951089_951090UIObjects1.length = 0;
gdjs.WinScreenCode.GD_951050_951074_951077_951089_951090UIObjects2.length = 0;
gdjs.WinScreenCode.GDHealthUIObjects1.length = 0;
gdjs.WinScreenCode.GDHealthUIObjects2.length = 0;
gdjs.WinScreenCode.GD_951044_951077_951085_951100_951075_951080_951058_951077_951082_951089_951090Objects1.length = 0;
gdjs.WinScreenCode.GD_951044_951077_951085_951100_951075_951080_951058_951077_951082_951089_951090Objects2.length = 0;
gdjs.WinScreenCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects1.length = 0;
gdjs.WinScreenCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects2.length = 0;


return;

}

gdjs['WinScreenCode'] = gdjs.WinScreenCode;
