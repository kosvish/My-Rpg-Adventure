gdjs.ForestCode = {};
gdjs.ForestCode.localVariables = [];
gdjs.ForestCode.idToCallbackMap = new Map();
gdjs.ForestCode.forEachIndex2 = 0;

gdjs.ForestCode.forEachIndex3 = 0;

gdjs.ForestCode.forEachObjects2 = [];

gdjs.ForestCode.forEachObjects3 = [];

gdjs.ForestCode.forEachTemporary2 = null;

gdjs.ForestCode.forEachTemporary3 = null;

gdjs.ForestCode.forEachTotalCount2 = 0;

gdjs.ForestCode.forEachTotalCount3 = 0;

gdjs.ForestCode.GDGrassObjects1= [];
gdjs.ForestCode.GDGrassObjects2= [];
gdjs.ForestCode.GDGrassObjects3= [];
gdjs.ForestCode.GDTreeObjects1= [];
gdjs.ForestCode.GDTreeObjects2= [];
gdjs.ForestCode.GDTreeObjects3= [];
gdjs.ForestCode.GD_951048_951076_951090_951080_951044_951077_951088_951077_951074_951085_951103Objects1= [];
gdjs.ForestCode.GD_951048_951076_951090_951080_951044_951077_951088_951077_951074_951085_951103Objects2= [];
gdjs.ForestCode.GD_951048_951076_951090_951080_951044_951077_951088_951077_951074_951085_951103Objects3= [];
gdjs.ForestCode.GDAppleObjects1= [];
gdjs.ForestCode.GDAppleObjects2= [];
gdjs.ForestCode.GDAppleObjects3= [];
gdjs.ForestCode.GDEnemyObjects1= [];
gdjs.ForestCode.GDEnemyObjects2= [];
gdjs.ForestCode.GDEnemyObjects3= [];
gdjs.ForestCode.GDSwordObjects1= [];
gdjs.ForestCode.GDSwordObjects2= [];
gdjs.ForestCode.GDSwordObjects3= [];
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951057_951082_951086_951088_951086_951089_951090_951080Objects1= [];
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951057_951082_951086_951088_951086_951089_951090_951080Objects2= [];
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951057_951082_951086_951088_951086_951089_951090_951080Objects3= [];
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951053_951077_951074_951080_951076_951080_951084_951086_951089_951090_951080Objects1= [];
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951053_951077_951074_951080_951076_951080_951084_951086_951089_951090_951080Objects2= [];
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951053_951077_951074_951080_951076_951080_951084_951086_951089_951090_951080Objects3= [];
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951054_951090_951088_951072_951074_951099Objects1= [];
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951054_951090_951088_951072_951074_951099Objects2= [];
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951054_951090_951088_951072_951074_951099Objects3= [];
gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects1= [];
gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects2= [];
gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects3= [];
gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects1= [];
gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects2= [];
gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects3= [];
gdjs.ForestCode.GDEnemySpawnerObjects1= [];
gdjs.ForestCode.GDEnemySpawnerObjects2= [];
gdjs.ForestCode.GDEnemySpawnerObjects3= [];
gdjs.ForestCode.GD_951057_951083_951072_951081_951084_951058_951077_951082_951089_951090Objects1= [];
gdjs.ForestCode.GD_951057_951083_951072_951081_951084_951058_951077_951082_951089_951090Objects2= [];
gdjs.ForestCode.GD_951057_951083_951072_951081_951084_951058_951077_951082_951089_951090Objects3= [];
gdjs.ForestCode.GDPlayerObjects1= [];
gdjs.ForestCode.GDPlayerObjects2= [];
gdjs.ForestCode.GDPlayerObjects3= [];
gdjs.ForestCode.GD_951050_951074_951077_951089_951090UIObjects1= [];
gdjs.ForestCode.GD_951050_951074_951077_951089_951090UIObjects2= [];
gdjs.ForestCode.GD_951050_951074_951077_951089_951090UIObjects3= [];
gdjs.ForestCode.GDHealthUIObjects1= [];
gdjs.ForestCode.GDHealthUIObjects2= [];
gdjs.ForestCode.GDHealthUIObjects3= [];
gdjs.ForestCode.GD_951044_951077_951085_951100_951075_951080_951058_951077_951082_951089_951090Objects1= [];
gdjs.ForestCode.GD_951044_951077_951085_951100_951075_951080_951058_951077_951082_951089_951090Objects2= [];
gdjs.ForestCode.GD_951044_951077_951085_951100_951075_951080_951058_951077_951082_951089_951090Objects3= [];
gdjs.ForestCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects1= [];
gdjs.ForestCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects2= [];
gdjs.ForestCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects3= [];


gdjs.ForestCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").simulateControl("Up");
}
}
{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Walk Up");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").simulateControl("Down");
}
}
{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Walk Down");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").simulateControl("Left");
}
}
{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Walk Left");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").simulateControl("Right");
}
}
{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Walk Right");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ForestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.ForestCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.ForestCode.GDPlayerObjects1[k] = gdjs.ForestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.ForestCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ForestCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Idle Down");
}
}
}

}


};gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.ForestCode.GDPlayerObjects1});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDTreeObjects1Objects = Hashtable.newFrom({"Tree": gdjs.ForestCode.GDTreeObjects1});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDTreeObjects1Objects = Hashtable.newFrom({"Tree": gdjs.ForestCode.GDTreeObjects1});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.ForestCode.GDPlayerObjects1});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951048_9595951076_9595951090_9595951080_9595951044_9595951077_9595951088_9595951077_9595951074_9595951085_9595951103Objects1Objects = Hashtable.newFrom({"ИдтиДеревня": gdjs.ForestCode.GD_951048_951076_951090_951080_951044_951077_951088_951077_951074_951085_951103Objects1});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.ForestCode.GDPlayerObjects2});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDAppleObjects2Objects = Hashtable.newFrom({"Apple": gdjs.ForestCode.GDAppleObjects2});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.ForestCode.GDEnemyObjects2});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951055_9595951086_9595951083_9595951086_9595951089_9595951072_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103_95959595BGObjects2Objects = Hashtable.newFrom({"ПолосаЗдоровья_BG": gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects2});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951055_9595951086_9595951083_9595951086_9595951089_9595951072_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103_95959595FillObjects2Objects = Hashtable.newFrom({"ПолосаЗдоровья_Fill": gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects2});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951055_9595951086_9595951083_9595951086_9595951089_9595951072_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103_95959595BGObjects1Objects = Hashtable.newFrom({"ПолосаЗдоровья_BG": gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects1});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951055_9595951086_9595951083_9595951086_9595951089_9595951072_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103_95959595FillObjects1Objects = Hashtable.newFrom({"ПолосаЗдоровья_Fill": gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects1});
gdjs.ForestCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Apple"), gdjs.ForestCode.GDAppleObjects2);
{for(var i = 0, len = gdjs.ForestCode.GDAppleObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDAppleObjects2[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Apple"), gdjs.ForestCode.GDAppleObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects2Objects, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDAppleObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ForestCode.GDAppleObjects2 */
{for(var i = 0, len = gdjs.ForestCode.GDAppleObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDAppleObjects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "24f110d27ad0929.mp3", 2, false, 50, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("КвестUI"), gdjs.ForestCode.GD_951050_951074_951077_951089_951090UIObjects2);
{for(var i = 0, len = gdjs.ForestCode.GD_951050_951074_951077_951089_951090UIObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GD_951050_951074_951077_951089_951090UIObjects2[i].getBehavior("Text").setText("Собрано яблок:" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber()) + "/3");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("КвестUI"), gdjs.ForestCode.GD_951050_951074_951077_951089_951090UIObjects2);
{for(var i = 0, len = gdjs.ForestCode.GD_951050_951074_951077_951089_951090UIObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GD_951050_951074_951077_951089_951090UIObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.ForestCode.GD_951050_951074_951077_951089_951090UIObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GD_951050_951074_951077_951089_951090UIObjects2[i].getBehavior("Text").setText("Яблоки собраны! Беги к Старосте!");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("КвестUI"), gdjs.ForestCode.GD_951050_951074_951077_951089_951090UIObjects2);
{for(var i = 0, len = gdjs.ForestCode.GD_951050_951074_951077_951089_951090UIObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GD_951050_951074_951077_951089_951090UIObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("КвестUI"), gdjs.ForestCode.GD_951050_951074_951077_951089_951090UIObjects2);
{for(var i = 0, len = gdjs.ForestCode.GD_951050_951074_951077_951089_951090UIObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GD_951050_951074_951077_951089_951090UIObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() <= 10);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("СлаймТекст"), gdjs.ForestCode.GD_951057_951083_951072_951081_951084_951058_951077_951082_951089_951090Objects2);
{for(var i = 0, len = gdjs.ForestCode.GD_951057_951083_951072_951081_951084_951058_951077_951082_951089_951090Objects2.length ;i < len;++i) {
    gdjs.ForestCode.GD_951057_951083_951072_951081_951084_951058_951077_951082_951089_951090Objects2[i].getBehavior("Text").setText("Убито слаймов: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()) + "/10");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17079916);
}
}
if (isConditionTrue_0) {
gdjs.ForestCode.GDEnemyObjects2.length = 0;

gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects2.length = 0;

gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDEnemyObjects2Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2, "");
}
{for(var i = 0, len = gdjs.ForestCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDEnemyObjects2[i].getBehavior("Scale").setScale(4);
}
}
{for(var i = 0, len = gdjs.ForestCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDEnemyObjects2[i].setColor("208;2;27");
}
}
{for(var i = 0, len = gdjs.ForestCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDEnemyObjects2[i].returnVariable(gdjs.ForestCode.GDEnemyObjects2[i].getVariables().getFromIndex(0)).setNumber(20);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951055_9595951086_9595951083_9595951086_9595951089_9595951072_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103_95959595BGObjects2Objects, (( gdjs.ForestCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.ForestCode.GDEnemyObjects2[0].getPointX("")), (( gdjs.ForestCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.ForestCode.GDEnemyObjects2[0].getPointY("")) - 20, "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951055_9595951086_9595951083_9595951086_9595951089_9595951072_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103_95959595FillObjects2Objects, (( gdjs.ForestCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.ForestCode.GDEnemyObjects2[0].getPointX("")), (( gdjs.ForestCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.ForestCode.GDEnemyObjects2[0].getPointY("")) - 20, "");
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.ForestCode.GDEnemyObjects2.length !== 0 ? gdjs.ForestCode.GDEnemyObjects2[0] : null), (gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects2.length !== 0 ? gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects2[0] : null));
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.ForestCode.GDEnemyObjects2.length !== 0 ? gdjs.ForestCode.GDEnemyObjects2[0] : null), (gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects2.length !== 0 ? gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects2[0] : null));
}
{for(var i = 0, len = gdjs.ForestCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDEnemyObjects2[i].returnVariable(gdjs.ForestCode.GDEnemyObjects2[i].getVariables().getFromIndex(1)).setBoolean(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.ForestCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ForestCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.ForestCode.GDEnemyObjects1[i].getVariableNumber(gdjs.ForestCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.ForestCode.GDEnemyObjects1[k] = gdjs.ForestCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.ForestCode.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ForestCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.ForestCode.GDEnemyObjects1[i].getVariableBoolean(gdjs.ForestCode.GDEnemyObjects1[i].getVariables().getFromIndex(1), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.ForestCode.GDEnemyObjects1[k] = gdjs.ForestCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.ForestCode.GDEnemyObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.ForestCode.GDEnemyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ПолосаЗдоровья_BG"), gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects1);
gdjs.copyArray(runtimeScene.getObjects("ПолосаЗдоровья_Fill"), gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects1);
gdjs.copyArray(runtimeScene.getObjects("СлаймТекст"), gdjs.ForestCode.GD_951057_951083_951072_951081_951084_951058_951077_951082_951089_951090Objects1);
{for(var i = 0, len = gdjs.ForestCode.GD_951057_951083_951072_951081_951084_951058_951077_951082_951089_951090Objects1.length ;i < len;++i) {
    gdjs.ForestCode.GD_951057_951083_951072_951081_951084_951058_951077_951082_951089_951090Objects1[i].getBehavior("Text").setText("ВЫ ПОБЕДИЛИ КОРОЛЯ");
}
}
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951055_9595951086_9595951083_9595951086_9595951089_9595951072_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103_95959595BGObjects1Objects, (gdjs.ForestCode.GDEnemyObjects1.length !== 0 ? gdjs.ForestCode.GDEnemyObjects1[0] : null), null);
}
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951055_9595951086_9595951083_9595951086_9595951089_9595951072_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103_95959595FillObjects1Objects, (gdjs.ForestCode.GDEnemyObjects1.length !== 0 ? gdjs.ForestCode.GDEnemyObjects1[0] : null), null);
}
{for(var i = 0, len = gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.ForestCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDSwordObjects1Objects = Hashtable.newFrom({"Sword": gdjs.ForestCode.GDSwordObjects1});
gdjs.ForestCode.asyncCallback17085260 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ForestCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Sword"), gdjs.ForestCode.GDSwordObjects2);

{for(var i = 0, len = gdjs.ForestCode.GDSwordObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDSwordObjects2[i].deleteFromScene(runtimeScene);
}
}
gdjs.ForestCode.localVariables.length = 0;
}
gdjs.ForestCode.idToCallbackMap.set(17085260, gdjs.ForestCode.asyncCallback17085260);
gdjs.ForestCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ForestCode.localVariables);
for (const obj of gdjs.ForestCode.GDSwordObjects1) asyncObjectsList.addObject("Sword", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.ForestCode.asyncCallback17085260(runtimeScene, asyncObjectsList)), 17085260, asyncObjectsList);
}
}

}


};gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDSwordObjects2Objects = Hashtable.newFrom({"Sword": gdjs.ForestCode.GDSwordObjects2});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.ForestCode.GDEnemyObjects2});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDSwordObjects2Objects = Hashtable.newFrom({"Sword": gdjs.ForestCode.GDSwordObjects2});
gdjs.ForestCode.asyncCallback17089388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ForestCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Enemy"), gdjs.ForestCode.GDEnemyObjects3);

{for(var i = 0, len = gdjs.ForestCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.ForestCode.GDEnemyObjects3[i].getBehavior("Animation").setAnimationName("Idle");
}
}
gdjs.ForestCode.localVariables.length = 0;
}
gdjs.ForestCode.idToCallbackMap.set(17089388, gdjs.ForestCode.asyncCallback17089388);
gdjs.ForestCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ForestCode.localVariables);
for (const obj of gdjs.ForestCode.GDEnemyObjects2) asyncObjectsList.addObject("Enemy", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.ForestCode.asyncCallback17089388(runtimeScene, asyncObjectsList)), 17089388, asyncObjectsList);
}
}

}


};gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951055_9595951086_9595951083_9595951086_9595951089_9595951072_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103_95959595BGObjects2Objects = Hashtable.newFrom({"ПолосаЗдоровья_BG": gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects2});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951055_9595951086_9595951083_9595951086_9595951089_9595951072_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103_95959595FillObjects2Objects = Hashtable.newFrom({"ПолосаЗдоровья_Fill": gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects2});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951047_9595951077_9595951083_9595951100_9595951103_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103Objects2Objects = Hashtable.newFrom({"ЗельяЗдоровья": gdjs.ForestCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects2});
gdjs.ForestCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.random(100) < 30);
}
if (isConditionTrue_0) {
/* Reuse gdjs.ForestCode.GDEnemyObjects2 */
gdjs.ForestCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951047_9595951077_9595951083_9595951100_9595951103_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103Objects2Objects, (( gdjs.ForestCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.ForestCode.GDEnemyObjects2[0].getPointX("")), (( gdjs.ForestCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.ForestCode.GDEnemyObjects2[0].getPointY("")), "");
}
}

}


};gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.ForestCode.GDPlayerObjects2});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.ForestCode.GDEnemyObjects2});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.ForestCode.GDPlayerObjects2});
gdjs.ForestCode.asyncCallback17094148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ForestCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects3);

{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects3[i].setColor("255;255;255");
}
}
gdjs.ForestCode.localVariables.length = 0;
}
gdjs.ForestCode.idToCallbackMap.set(17094148, gdjs.ForestCode.asyncCallback17094148);
gdjs.ForestCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ForestCode.localVariables);
for (const obj of gdjs.ForestCode.GDPlayerObjects2) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.ForestCode.asyncCallback17094148(runtimeScene, asyncObjectsList)), 17094148, asyncObjectsList);
}
}

}


};gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951055_9595951086_9595951083_9595951086_9595951089_9595951072_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103_95959595BGObjects3Objects = Hashtable.newFrom({"ПолосаЗдоровья_BG": gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects3});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951055_9595951086_9595951083_9595951086_9595951089_9595951072_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103_95959595FillObjects3Objects = Hashtable.newFrom({"ПолосаЗдоровья_Fill": gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects3});
gdjs.ForestCode.eventsList6 = function(runtimeScene) {

};gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951055_9595951086_9595951083_9595951086_9595951089_9595951072_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103_95959595BGObjects2Objects = Hashtable.newFrom({"ПолосаЗдоровья_BG": gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects2});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951055_9595951086_9595951083_9595951086_9595951089_9595951072_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103_95959595FillObjects2Objects = Hashtable.newFrom({"ПолосаЗдоровья_Fill": gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects2});
gdjs.ForestCode.eventsList7 = function(runtimeScene) {

};gdjs.ForestCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.ForestCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.ForestCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDEnemyObjects2[i].addForceTowardObject((gdjs.ForestCode.GDPlayerObjects2.length !== 0 ? gdjs.ForestCode.GDPlayerObjects2[0] : null), 20, 0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.ForestCode.GDEnemyObjects2);
{for(var i = 0, len = gdjs.ForestCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDEnemyObjects2[i].clearForces();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.ForestCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Sword"), gdjs.ForestCode.GDSwordObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDSwordObjects2Objects, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDEnemyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17088572);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ForestCode.GDEnemyObjects2 */
/* Reuse gdjs.ForestCode.GDSwordObjects2 */
{for(var i = 0, len = gdjs.ForestCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDEnemyObjects2[i].returnVariable(gdjs.ForestCode.GDEnemyObjects2[i].getVariables().getFromIndex(0)).sub(1);
}
}
{for(var i = 0, len = gdjs.ForestCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDEnemyObjects2[i].separateFromObjectsList(gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDSwordObjects2Objects, false);
}
}
{for(var i = 0, len = gdjs.ForestCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDEnemyObjects2[i].getBehavior("Animation").setAnimationName("Hurt");
}
}

{ //Subevents
gdjs.ForestCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.ForestCode.GDEnemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ForestCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.ForestCode.GDEnemyObjects2[i].getVariableNumber(gdjs.ForestCode.GDEnemyObjects2[i].getVariables().getFromIndex(0)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.ForestCode.GDEnemyObjects2[k] = gdjs.ForestCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.ForestCode.GDEnemyObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ForestCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.ForestCode.GDEnemyObjects2[i].getVariableBoolean(gdjs.ForestCode.GDEnemyObjects2[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.ForestCode.GDEnemyObjects2[k] = gdjs.ForestCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.ForestCode.GDEnemyObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.ForestCode.GDEnemyObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ПолосаЗдоровья_BG"), gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects2);
gdjs.copyArray(runtimeScene.getObjects("ПолосаЗдоровья_Fill"), gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(1).add(50);
}
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951055_9595951086_9595951083_9595951086_9595951089_9595951072_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103_95959595BGObjects2Objects, (gdjs.ForestCode.GDEnemyObjects2.length !== 0 ? gdjs.ForestCode.GDEnemyObjects2[0] : null), null);
}
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951055_9595951086_9595951083_9595951086_9595951089_9595951072_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103_95959595FillObjects2Objects, (gdjs.ForestCode.GDEnemyObjects2.length !== 0 ? gdjs.ForestCode.GDEnemyObjects2[0] : null), null);
}
{for(var i = 0, len = gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.ForestCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDEnemyObjects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}

{ //Subevents
gdjs.ForestCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.ForestCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects2Objects, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDEnemyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "DamageTimer") >= 1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.ForestCode.GDEnemyObjects2 */
/* Reuse gdjs.ForestCode.GDPlayerObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(4).sub(20);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "DamageTimer");
}
{for(var i = 0, len = gdjs.ForestCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDEnemyObjects2[i].separateFromObjectsList(gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects2Objects, false);
}
}
{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects2[i].setColor("208;2;27");
}
}

{ //Subevents
gdjs.ForestCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.ForestCode.GDEnemyObjects2);

for (gdjs.ForestCode.forEachIndex3 = 0;gdjs.ForestCode.forEachIndex3 < gdjs.ForestCode.GDEnemyObjects2.length;++gdjs.ForestCode.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("ПолосаЗдоровья_BG"), gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects3);
gdjs.copyArray(runtimeScene.getObjects("ПолосаЗдоровья_Fill"), gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects3);
gdjs.ForestCode.GDEnemyObjects3.length = 0;


gdjs.ForestCode.forEachTemporary3 = gdjs.ForestCode.GDEnemyObjects2[gdjs.ForestCode.forEachIndex3];
gdjs.ForestCode.GDEnemyObjects3.push(gdjs.ForestCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951055_9595951086_9595951083_9595951086_9595951089_9595951072_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103_95959595BGObjects3Objects, (gdjs.ForestCode.GDEnemyObjects3.length !== 0 ? gdjs.ForestCode.GDEnemyObjects3[0] : null), null);
}
{for(var i = 0, len = gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects3.length ;i < len;++i) {
    gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects3[i].setPosition((( gdjs.ForestCode.GDEnemyObjects3.length === 0 ) ? 0 :gdjs.ForestCode.GDEnemyObjects3[0].getPointX("")),(( gdjs.ForestCode.GDEnemyObjects3.length === 0 ) ? 0 :gdjs.ForestCode.GDEnemyObjects3[0].getPointY("")) - 20);
}
}
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951055_9595951086_9595951083_9595951086_9595951089_9595951072_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103_95959595FillObjects3Objects, (gdjs.ForestCode.GDEnemyObjects3.length !== 0 ? gdjs.ForestCode.GDEnemyObjects3[0] : null), null);
}
{for(var i = 0, len = gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects3.length ;i < len;++i) {
    gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects3[i].setPosition((( gdjs.ForestCode.GDEnemyObjects3.length === 0 ) ? 0 :gdjs.ForestCode.GDEnemyObjects3[0].getPointX("")),(( gdjs.ForestCode.GDEnemyObjects3.length === 0 ) ? 0 :gdjs.ForestCode.GDEnemyObjects3[0].getPointY("")) - 20);
}
}
{for(var i = 0, len = gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects3.length ;i < len;++i) {
    gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects3[i].getBehavior("Resizable").setWidth(((gdjs.ForestCode.GDEnemyObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.ForestCode.GDEnemyObjects3[0].getVariables()).getFromIndex(0).getAsNumber() * 12);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.ForestCode.GDEnemyObjects1);

for (gdjs.ForestCode.forEachIndex2 = 0;gdjs.ForestCode.forEachIndex2 < gdjs.ForestCode.GDEnemyObjects1.length;++gdjs.ForestCode.forEachIndex2) {
gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects2.length = 0;

gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects2.length = 0;

gdjs.ForestCode.GDEnemyObjects2.length = 0;


gdjs.ForestCode.forEachTemporary2 = gdjs.ForestCode.GDEnemyObjects1[gdjs.ForestCode.forEachIndex2];
gdjs.ForestCode.GDEnemyObjects2.push(gdjs.ForestCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951055_9595951086_9595951083_9595951086_9595951089_9595951072_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103_95959595BGObjects2Objects, (( gdjs.ForestCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.ForestCode.GDEnemyObjects2[0].getPointX("")), (( gdjs.ForestCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.ForestCode.GDEnemyObjects2[0].getPointY("")), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951055_9595951086_9595951083_9595951086_9595951089_9595951072_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103_95959595FillObjects2Objects, (( gdjs.ForestCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.ForestCode.GDEnemyObjects2[0].getPointX("")), (( gdjs.ForestCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.ForestCode.GDEnemyObjects2[0].getPointY("")), "");
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.ForestCode.GDEnemyObjects2.length !== 0 ? gdjs.ForestCode.GDEnemyObjects2[0] : null), (gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects2.length !== 0 ? gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects2[0] : null));
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.ForestCode.GDEnemyObjects2.length !== 0 ? gdjs.ForestCode.GDEnemyObjects2[0] : null), (gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects2.length !== 0 ? gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects2[0] : null));
}
{for(var i = 0, len = gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects2[i].getBehavior("Resizable").setWidth(((gdjs.ForestCode.GDEnemyObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.ForestCode.GDEnemyObjects2[0].getVariables()).getFromIndex(0).getAsNumber() * 12);
}
}
}
}

}


};gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.ForestCode.GDPlayerObjects2});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951047_9595951077_9595951083_9595951100_9595951103_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103Objects2Objects = Hashtable.newFrom({"ЗельяЗдоровья": gdjs.ForestCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects2});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.ForestCode.GDPlayerObjects2});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951047_9595951077_9595951083_9595951100_9595951077_9595951057_9595951082_9595951086_9595951088_9595951086_9595951089_9595951090_9595951080Objects2Objects = Hashtable.newFrom({"ЗельеСкорости": gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951057_951082_951086_951088_951086_951089_951090_951080Objects2});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.ForestCode.GDPlayerObjects2});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951047_9595951077_9595951083_9595951100_9595951077_9595951054_9595951090_9595951088_9595951072_9595951074_9595951099Objects2Objects = Hashtable.newFrom({"ЗельеОтравы": gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951054_951090_951088_951072_951074_951099Objects2});
gdjs.ForestCode.asyncCallback17103596 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ForestCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects3);

{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects3[i].setColor("255;255;255");
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "кашель.mp3", 2, false, 30, 1);
}
gdjs.ForestCode.localVariables.length = 0;
}
gdjs.ForestCode.idToCallbackMap.set(17103596, gdjs.ForestCode.asyncCallback17103596);
gdjs.ForestCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ForestCode.localVariables);
for (const obj of gdjs.ForestCode.GDPlayerObjects2) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.ForestCode.asyncCallback17103596(runtimeScene, asyncObjectsList)), 17103596, asyncObjectsList);
}
}

}


};gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.ForestCode.GDPlayerObjects2});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951047_9595951077_9595951083_9595951100_9595951077_9595951053_9595951077_9595951074_9595951080_9595951076_9595951080_9595951084_9595951086_9595951089_9595951090_9595951080Objects2Objects = Hashtable.newFrom({"ЗельеНевидимости": gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951053_951077_951074_951080_951076_951080_951084_951086_951089_951090_951080Objects2});
gdjs.ForestCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("ЗельяЗдоровья"), gdjs.ForestCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects2Objects, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951047_9595951077_9595951083_9595951100_9595951103_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ForestCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects2 */
{for(var i = 0, len = gdjs.ForestCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects2.length ;i < len;++i) {
    gdjs.ForestCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(4).add(20);
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "minecraft_drink.mp3", 2, false, 30, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() > 100);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(100);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("ЗельеСкорости"), gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951057_951082_951086_951088_951086_951089_951090_951080Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects2Objects, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951047_9595951077_9595951083_9595951100_9595951077_9595951057_9595951082_9595951086_9595951088_9595951086_9595951089_9595951090_9595951080Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ForestCode.GDPlayerObjects2 */
/* Reuse gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951057_951082_951086_951088_951086_951089_951090_951080Objects2 */
{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").setMaxSpeed(200);
}
}
{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects2[i].setColor("74;144;226");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpeedEffect");
}
{for(var i = 0, len = gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951057_951082_951086_951088_951086_951089_951090_951080Objects2.length ;i < len;++i) {
    gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951057_951082_951086_951088_951086_951089_951090_951080Objects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("ЗельеОтравы"), gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951054_951090_951088_951072_951074_951099Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects2Objects, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951047_9595951077_9595951083_9595951100_9595951077_9595951054_9595951090_9595951088_9595951072_9595951074_9595951099Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ForestCode.GDPlayerObjects2 */
/* Reuse gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951054_951090_951088_951072_951074_951099Objects2 */
{runtimeScene.getGame().getVariables().getFromIndex(4).sub(10);
}
{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects2[i].setColor("126;211;33");
}
}
{for(var i = 0, len = gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951054_951090_951088_951072_951074_951099Objects2.length ;i < len;++i) {
    gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951054_951090_951088_951072_951074_951099Objects2[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.ForestCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SpeedEffect") >= 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").setMaxSpeed(100);
}
}
{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects2[i].setColor("255;255;255");
}
}
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "SpeedEffect");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("ЗельеНевидимости"), gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951053_951077_951074_951080_951076_951080_951084_951086_951089_951090_951080Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects2Objects, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951047_9595951077_9595951083_9595951100_9595951077_9595951053_9595951077_9595951074_9595951080_9595951076_9595951080_9595951084_9595951086_9595951089_9595951090_9595951080Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ForestCode.GDPlayerObjects2 */
/* Reuse gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951053_951077_951074_951080_951076_951080_951084_951086_951089_951090_951080Objects2 */
{for(var i = 0, len = gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951053_951077_951074_951080_951076_951080_951084_951086_951089_951090_951080Objects2.length ;i < len;++i) {
    gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951053_951077_951074_951080_951076_951080_951084_951086_951089_951090_951080Objects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setBoolean(true);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "InvisEffect");
}
{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects2[i].getBehavior("Opacity").setOpacity(100);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "InvisEffect") > 7;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects2[i].getBehavior("Flash").Flash(0.1, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "InvisEffect") >= 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(5).setBoolean(false);
}
{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "InvisEffect");
}
}

}


};gdjs.ForestCode.mapOfEmptyGDEnemyObjects = Hashtable.newFrom({"Enemy": []});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDEnemySpawnerObjects1Objects = Hashtable.newFrom({"EnemySpawner": gdjs.ForestCode.GDEnemySpawnerObjects1});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.ForestCode.GDEnemyObjects1});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951055_9595951086_9595951083_9595951086_9595951089_9595951072_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103_95959595BGObjects1Objects = Hashtable.newFrom({"ПолосаЗдоровья_BG": gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects1});
gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951055_9595951086_9595951083_9595951086_9595951089_9595951072_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103_95959595FillObjects1Objects = Hashtable.newFrom({"ПолосаЗдоровья_Fill": gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects1});
gdjs.ForestCode.eventsList11 = function(runtimeScene) {

{


gdjs.ForestCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Apple"), gdjs.ForestCode.GDAppleObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemySpawner"), gdjs.ForestCode.GDEnemySpawnerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ИдтиДеревня"), gdjs.ForestCode.GD_951048_951076_951090_951080_951044_951077_951088_951077_951074_951085_951103Objects1);
{for(var i = 0, len = gdjs.ForestCode.GD_951048_951076_951090_951080_951044_951077_951088_951077_951074_951085_951103Objects1.length ;i < len;++i) {
    gdjs.ForestCode.GD_951048_951076_951090_951080_951044_951077_951088_951077_951074_951085_951103Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ForestCode.GDAppleObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDAppleObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "DamageTimer");
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Mario RPG Forest Maze.mp3", 1, true, 25, 1);
}
{for(var i = 0, len = gdjs.ForestCode.GDEnemySpawnerObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDEnemySpawnerObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Respawn");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tree"), gdjs.ForestCode.GDTreeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects1Objects, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDTreeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ForestCode.GDPlayerObjects1 */
/* Reuse gdjs.ForestCode.GDTreeObjects1 */
{for(var i = 0, len = gdjs.ForestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDTreeObjects1Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ИдтиДеревня"), gdjs.ForestCode.GD_951048_951076_951090_951080_951044_951077_951088_951077_951074_951085_951103Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDPlayerObjects1Objects, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951048_9595951076_9595951090_9595951080_9595951044_9595951077_9595951088_9595951077_9595951074_9595951085_9595951103Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Village", false);
}
}

}


{


gdjs.ForestCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17084988);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ForestCode.GDPlayerObjects1);
gdjs.ForestCode.GDSwordObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDSwordObjects1Objects, (( gdjs.ForestCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.ForestCode.GDPlayerObjects1[0].getPointX("")), (( gdjs.ForestCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.ForestCode.GDPlayerObjects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.ForestCode.GDSwordObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDSwordObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}

{ //Subevents
gdjs.ForestCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ДеньгиТекст"), gdjs.ForestCode.GD_951044_951077_951085_951100_951075_951080_951058_951077_951082_951089_951090Objects1);
{for(var i = 0, len = gdjs.ForestCode.GD_951044_951077_951085_951100_951075_951080_951058_951077_951082_951089_951090Objects1.length ;i < len;++i) {
    gdjs.ForestCode.GD_951044_951077_951085_951100_951075_951080_951058_951077_951082_951089_951090Objects1[i].getBehavior("Text").setText("Золото: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
}

}


{


gdjs.ForestCode.eventsList8(runtimeScene);
}


{


gdjs.ForestCode.eventsList10(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HealthUI"), gdjs.ForestCode.GDHealthUIObjects1);
{for(var i = 0, len = gdjs.ForestCode.GDHealthUIObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDHealthUIObjects1[i].getBehavior("Text").setText("Здоровье: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Respawn") >= 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.ForestCode.mapOfEmptyGDEnemyObjects) < 4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() < 10);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemySpawner"), gdjs.ForestCode.GDEnemySpawnerObjects1);
gdjs.ForestCode.GDEnemyObjects1.length = 0;

gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects1.length = 0;

gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects1.length = 0;

{gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDEnemySpawnerObjects1Objects);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GDEnemyObjects1Objects, (( gdjs.ForestCode.GDEnemySpawnerObjects1.length === 0 ) ? 0 :gdjs.ForestCode.GDEnemySpawnerObjects1[0].getPointX("")), (( gdjs.ForestCode.GDEnemySpawnerObjects1.length === 0 ) ? 0 :gdjs.ForestCode.GDEnemySpawnerObjects1[0].getPointY("")), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951055_9595951086_9595951083_9595951086_9595951089_9595951072_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103_95959595BGObjects1Objects, (( gdjs.ForestCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.ForestCode.GDEnemyObjects1[0].getPointX("")), (( gdjs.ForestCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.ForestCode.GDEnemyObjects1[0].getPointY("")), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.ForestCode.mapOfGDgdjs_9546ForestCode_9546GD_9595951055_9595951086_9595951083_9595951086_9595951089_9595951072_9595951047_9595951076_9595951086_9595951088_9595951086_9595951074_9595951100_9595951103_95959595FillObjects1Objects, (( gdjs.ForestCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.ForestCode.GDEnemyObjects1[0].getPointX("")), (( gdjs.ForestCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.ForestCode.GDEnemyObjects1[0].getPointY("")), "");
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.ForestCode.GDEnemyObjects1.length !== 0 ? gdjs.ForestCode.GDEnemyObjects1[0] : null), (gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects1.length !== 0 ? gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects1[0] : null));
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.ForestCode.GDEnemyObjects1.length !== 0 ? gdjs.ForestCode.GDEnemyObjects1[0] : null), (gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects1.length !== 0 ? gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects1[0] : null));
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Respawn");
}
}

}


};

gdjs.ForestCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ForestCode.GDGrassObjects1.length = 0;
gdjs.ForestCode.GDGrassObjects2.length = 0;
gdjs.ForestCode.GDGrassObjects3.length = 0;
gdjs.ForestCode.GDTreeObjects1.length = 0;
gdjs.ForestCode.GDTreeObjects2.length = 0;
gdjs.ForestCode.GDTreeObjects3.length = 0;
gdjs.ForestCode.GD_951048_951076_951090_951080_951044_951077_951088_951077_951074_951085_951103Objects1.length = 0;
gdjs.ForestCode.GD_951048_951076_951090_951080_951044_951077_951088_951077_951074_951085_951103Objects2.length = 0;
gdjs.ForestCode.GD_951048_951076_951090_951080_951044_951077_951088_951077_951074_951085_951103Objects3.length = 0;
gdjs.ForestCode.GDAppleObjects1.length = 0;
gdjs.ForestCode.GDAppleObjects2.length = 0;
gdjs.ForestCode.GDAppleObjects3.length = 0;
gdjs.ForestCode.GDEnemyObjects1.length = 0;
gdjs.ForestCode.GDEnemyObjects2.length = 0;
gdjs.ForestCode.GDEnemyObjects3.length = 0;
gdjs.ForestCode.GDSwordObjects1.length = 0;
gdjs.ForestCode.GDSwordObjects2.length = 0;
gdjs.ForestCode.GDSwordObjects3.length = 0;
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951057_951082_951086_951088_951086_951089_951090_951080Objects1.length = 0;
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951057_951082_951086_951088_951086_951089_951090_951080Objects2.length = 0;
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951057_951082_951086_951088_951086_951089_951090_951080Objects3.length = 0;
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951053_951077_951074_951080_951076_951080_951084_951086_951089_951090_951080Objects1.length = 0;
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951053_951077_951074_951080_951076_951080_951084_951086_951089_951090_951080Objects2.length = 0;
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951053_951077_951074_951080_951076_951080_951084_951086_951089_951090_951080Objects3.length = 0;
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951054_951090_951088_951072_951074_951099Objects1.length = 0;
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951054_951090_951088_951072_951074_951099Objects2.length = 0;
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951054_951090_951088_951072_951074_951099Objects3.length = 0;
gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects1.length = 0;
gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects2.length = 0;
gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects3.length = 0;
gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects1.length = 0;
gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects2.length = 0;
gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects3.length = 0;
gdjs.ForestCode.GDEnemySpawnerObjects1.length = 0;
gdjs.ForestCode.GDEnemySpawnerObjects2.length = 0;
gdjs.ForestCode.GDEnemySpawnerObjects3.length = 0;
gdjs.ForestCode.GD_951057_951083_951072_951081_951084_951058_951077_951082_951089_951090Objects1.length = 0;
gdjs.ForestCode.GD_951057_951083_951072_951081_951084_951058_951077_951082_951089_951090Objects2.length = 0;
gdjs.ForestCode.GD_951057_951083_951072_951081_951084_951058_951077_951082_951089_951090Objects3.length = 0;
gdjs.ForestCode.GDPlayerObjects1.length = 0;
gdjs.ForestCode.GDPlayerObjects2.length = 0;
gdjs.ForestCode.GDPlayerObjects3.length = 0;
gdjs.ForestCode.GD_951050_951074_951077_951089_951090UIObjects1.length = 0;
gdjs.ForestCode.GD_951050_951074_951077_951089_951090UIObjects2.length = 0;
gdjs.ForestCode.GD_951050_951074_951077_951089_951090UIObjects3.length = 0;
gdjs.ForestCode.GDHealthUIObjects1.length = 0;
gdjs.ForestCode.GDHealthUIObjects2.length = 0;
gdjs.ForestCode.GDHealthUIObjects3.length = 0;
gdjs.ForestCode.GD_951044_951077_951085_951100_951075_951080_951058_951077_951082_951089_951090Objects1.length = 0;
gdjs.ForestCode.GD_951044_951077_951085_951100_951075_951080_951058_951077_951082_951089_951090Objects2.length = 0;
gdjs.ForestCode.GD_951044_951077_951085_951100_951075_951080_951058_951077_951082_951089_951090Objects3.length = 0;
gdjs.ForestCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects1.length = 0;
gdjs.ForestCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects2.length = 0;
gdjs.ForestCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects3.length = 0;

gdjs.ForestCode.eventsList11(runtimeScene);
gdjs.ForestCode.GDGrassObjects1.length = 0;
gdjs.ForestCode.GDGrassObjects2.length = 0;
gdjs.ForestCode.GDGrassObjects3.length = 0;
gdjs.ForestCode.GDTreeObjects1.length = 0;
gdjs.ForestCode.GDTreeObjects2.length = 0;
gdjs.ForestCode.GDTreeObjects3.length = 0;
gdjs.ForestCode.GD_951048_951076_951090_951080_951044_951077_951088_951077_951074_951085_951103Objects1.length = 0;
gdjs.ForestCode.GD_951048_951076_951090_951080_951044_951077_951088_951077_951074_951085_951103Objects2.length = 0;
gdjs.ForestCode.GD_951048_951076_951090_951080_951044_951077_951088_951077_951074_951085_951103Objects3.length = 0;
gdjs.ForestCode.GDAppleObjects1.length = 0;
gdjs.ForestCode.GDAppleObjects2.length = 0;
gdjs.ForestCode.GDAppleObjects3.length = 0;
gdjs.ForestCode.GDEnemyObjects1.length = 0;
gdjs.ForestCode.GDEnemyObjects2.length = 0;
gdjs.ForestCode.GDEnemyObjects3.length = 0;
gdjs.ForestCode.GDSwordObjects1.length = 0;
gdjs.ForestCode.GDSwordObjects2.length = 0;
gdjs.ForestCode.GDSwordObjects3.length = 0;
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951057_951082_951086_951088_951086_951089_951090_951080Objects1.length = 0;
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951057_951082_951086_951088_951086_951089_951090_951080Objects2.length = 0;
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951057_951082_951086_951088_951086_951089_951090_951080Objects3.length = 0;
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951053_951077_951074_951080_951076_951080_951084_951086_951089_951090_951080Objects1.length = 0;
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951053_951077_951074_951080_951076_951080_951084_951086_951089_951090_951080Objects2.length = 0;
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951053_951077_951074_951080_951076_951080_951084_951086_951089_951090_951080Objects3.length = 0;
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951054_951090_951088_951072_951074_951099Objects1.length = 0;
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951054_951090_951088_951072_951074_951099Objects2.length = 0;
gdjs.ForestCode.GD_951047_951077_951083_951100_951077_951054_951090_951088_951072_951074_951099Objects3.length = 0;
gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects1.length = 0;
gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects2.length = 0;
gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595BGObjects3.length = 0;
gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects1.length = 0;
gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects2.length = 0;
gdjs.ForestCode.GD_951055_951086_951083_951086_951089_951072_951047_951076_951086_951088_951086_951074_951100_951103_9595FillObjects3.length = 0;
gdjs.ForestCode.GDEnemySpawnerObjects1.length = 0;
gdjs.ForestCode.GDEnemySpawnerObjects2.length = 0;
gdjs.ForestCode.GDEnemySpawnerObjects3.length = 0;
gdjs.ForestCode.GD_951057_951083_951072_951081_951084_951058_951077_951082_951089_951090Objects1.length = 0;
gdjs.ForestCode.GD_951057_951083_951072_951081_951084_951058_951077_951082_951089_951090Objects2.length = 0;
gdjs.ForestCode.GD_951057_951083_951072_951081_951084_951058_951077_951082_951089_951090Objects3.length = 0;
gdjs.ForestCode.GDPlayerObjects1.length = 0;
gdjs.ForestCode.GDPlayerObjects2.length = 0;
gdjs.ForestCode.GDPlayerObjects3.length = 0;
gdjs.ForestCode.GD_951050_951074_951077_951089_951090UIObjects1.length = 0;
gdjs.ForestCode.GD_951050_951074_951077_951089_951090UIObjects2.length = 0;
gdjs.ForestCode.GD_951050_951074_951077_951089_951090UIObjects3.length = 0;
gdjs.ForestCode.GDHealthUIObjects1.length = 0;
gdjs.ForestCode.GDHealthUIObjects2.length = 0;
gdjs.ForestCode.GDHealthUIObjects3.length = 0;
gdjs.ForestCode.GD_951044_951077_951085_951100_951075_951080_951058_951077_951082_951089_951090Objects1.length = 0;
gdjs.ForestCode.GD_951044_951077_951085_951100_951075_951080_951058_951077_951082_951089_951090Objects2.length = 0;
gdjs.ForestCode.GD_951044_951077_951085_951100_951075_951080_951058_951077_951082_951089_951090Objects3.length = 0;
gdjs.ForestCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects1.length = 0;
gdjs.ForestCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects2.length = 0;
gdjs.ForestCode.GD_951047_951077_951083_951100_951103_951047_951076_951086_951088_951086_951074_951100_951103Objects3.length = 0;


return;

}

gdjs['ForestCode'] = gdjs.ForestCode;
