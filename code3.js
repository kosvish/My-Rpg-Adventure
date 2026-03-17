gdjs.GameOverCode = {};
gdjs.GameOverCode.localVariables = [];
gdjs.GameOverCode.idToCallbackMap = new Map();
gdjs.GameOverCode.GDGameOverObjects1= [];
gdjs.GameOverCode.GDGameOverObjects2= [];
gdjs.GameOverCode.GDgame_9595overObjects1= [];
gdjs.GameOverCode.GDgame_9595overObjects2= [];
gdjs.GameOverCode.GDBackButtonObjects1= [];
gdjs.GameOverCode.GDBackButtonObjects2= [];
gdjs.GameOverCode.GDPlayerObjects1= [];
gdjs.GameOverCode.GDPlayerObjects2= [];
gdjs.GameOverCode.GD_951050_951074_951077_951089_951090UIObjects1= [];
gdjs.GameOverCode.GD_951050_951074_951077_951089_951090UIObjects2= [];
gdjs.GameOverCode.GDHealthUIObjects1= [];
gdjs.GameOverCode.GDHealthUIObjects2= [];
gdjs.GameOverCode.GD_951044_951077_951085_951100_951075_951080_951058_951077_951082_951089_951090Objects1= [];
gdjs.GameOverCode.GD_951044_951077_951085_951100_951075_951080_951058_951077_951082_951089_951090Objects2= [];
gdjs.GameOverCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects1= [];
gdjs.GameOverCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects2= [];


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.GameOverCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDBackButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDBackButtonObjects1[k] = gdjs.GameOverCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDBackButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Village", false);
}
}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDGameOverObjects1.length = 0;
gdjs.GameOverCode.GDGameOverObjects2.length = 0;
gdjs.GameOverCode.GDgame_9595overObjects1.length = 0;
gdjs.GameOverCode.GDgame_9595overObjects2.length = 0;
gdjs.GameOverCode.GDBackButtonObjects1.length = 0;
gdjs.GameOverCode.GDBackButtonObjects2.length = 0;
gdjs.GameOverCode.GDPlayerObjects1.length = 0;
gdjs.GameOverCode.GDPlayerObjects2.length = 0;
gdjs.GameOverCode.GD_951050_951074_951077_951089_951090UIObjects1.length = 0;
gdjs.GameOverCode.GD_951050_951074_951077_951089_951090UIObjects2.length = 0;
gdjs.GameOverCode.GDHealthUIObjects1.length = 0;
gdjs.GameOverCode.GDHealthUIObjects2.length = 0;
gdjs.GameOverCode.GD_951044_951077_951085_951100_951075_951080_951058_951077_951082_951089_951090Objects1.length = 0;
gdjs.GameOverCode.GD_951044_951077_951085_951100_951075_951080_951058_951077_951082_951089_951090Objects2.length = 0;
gdjs.GameOverCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects1.length = 0;
gdjs.GameOverCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);
gdjs.GameOverCode.GDGameOverObjects1.length = 0;
gdjs.GameOverCode.GDGameOverObjects2.length = 0;
gdjs.GameOverCode.GDgame_9595overObjects1.length = 0;
gdjs.GameOverCode.GDgame_9595overObjects2.length = 0;
gdjs.GameOverCode.GDBackButtonObjects1.length = 0;
gdjs.GameOverCode.GDBackButtonObjects2.length = 0;
gdjs.GameOverCode.GDPlayerObjects1.length = 0;
gdjs.GameOverCode.GDPlayerObjects2.length = 0;
gdjs.GameOverCode.GD_951050_951074_951077_951089_951090UIObjects1.length = 0;
gdjs.GameOverCode.GD_951050_951074_951077_951089_951090UIObjects2.length = 0;
gdjs.GameOverCode.GDHealthUIObjects1.length = 0;
gdjs.GameOverCode.GDHealthUIObjects2.length = 0;
gdjs.GameOverCode.GD_951044_951077_951085_951100_951075_951080_951058_951077_951082_951089_951090Objects1.length = 0;
gdjs.GameOverCode.GD_951044_951077_951085_951100_951075_951080_951058_951077_951082_951089_951090Objects2.length = 0;
gdjs.GameOverCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects1.length = 0;
gdjs.GameOverCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects2.length = 0;


return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
