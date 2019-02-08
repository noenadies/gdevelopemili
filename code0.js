gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDmijugadorObjects1_1final = [];

gdjs.New_32sceneCode.GDTiledGrassPlatformObjects1= [];
gdjs.New_32sceneCode.GDTiledGrassPlatformObjects2= [];
gdjs.New_32sceneCode.GDTiledGrassPlatformObjects3= [];
gdjs.New_32sceneCode.GDCloudObjects1= [];
gdjs.New_32sceneCode.GDCloudObjects2= [];
gdjs.New_32sceneCode.GDCloudObjects3= [];
gdjs.New_32sceneCode.GDLeftButtonObjects1= [];
gdjs.New_32sceneCode.GDLeftButtonObjects2= [];
gdjs.New_32sceneCode.GDLeftButtonObjects3= [];
gdjs.New_32sceneCode.GDRightButtonObjects1= [];
gdjs.New_32sceneCode.GDRightButtonObjects2= [];
gdjs.New_32sceneCode.GDRightButtonObjects3= [];
gdjs.New_32sceneCode.GDJumpButtonObjects1= [];
gdjs.New_32sceneCode.GDJumpButtonObjects2= [];
gdjs.New_32sceneCode.GDJumpButtonObjects3= [];
gdjs.New_32sceneCode.GDArrowButtonsBgObjects1= [];
gdjs.New_32sceneCode.GDArrowButtonsBgObjects2= [];
gdjs.New_32sceneCode.GDArrowButtonsBgObjects3= [];
gdjs.New_32sceneCode.GDmijugadorObjects1= [];
gdjs.New_32sceneCode.GDmijugadorObjects2= [];
gdjs.New_32sceneCode.GDmijugadorObjects3= [];
gdjs.New_32sceneCode.GDtruenoObjects1= [];
gdjs.New_32sceneCode.GDtruenoObjects2= [];
gdjs.New_32sceneCode.GDtruenoObjects3= [];
gdjs.New_32sceneCode.GDlluviaObjects1= [];
gdjs.New_32sceneCode.GDlluviaObjects2= [];
gdjs.New_32sceneCode.GDlluviaObjects3= [];
gdjs.New_32sceneCode.GDnbObjects1= [];
gdjs.New_32sceneCode.GDnbObjects2= [];
gdjs.New_32sceneCode.GDnbObjects3= [];
gdjs.New_32sceneCode.GDpiedraObjects1= [];
gdjs.New_32sceneCode.GDpiedraObjects2= [];
gdjs.New_32sceneCode.GDpiedraObjects3= [];
gdjs.New_32sceneCode.GDcasaObjects1= [];
gdjs.New_32sceneCode.GDcasaObjects2= [];
gdjs.New_32sceneCode.GDcasaObjects3= [];
gdjs.New_32sceneCode.GDarbObjects1= [];
gdjs.New_32sceneCode.GDarbObjects2= [];
gdjs.New_32sceneCode.GDarbObjects3= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.New_32sceneCode.conditionTrue_1 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_1 = {val:false};


gdjs.New_32sceneCode.eventsList0x744aa0 = function(runtimeScene) {

{

gdjs.New_32sceneCode.GDmijugadorObjects2.createFrom(gdjs.New_32sceneCode.GDmijugadorObjects1);


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDmijugadorObjects2.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDmijugadorObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDmijugadorObjects2[k] = gdjs.New_32sceneCode.GDmijugadorObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDmijugadorObjects2.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDmijugadorObjects2 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDmijugadorObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDmijugadorObjects2[i].setAnimation(0);
}
}}

}


{

/* Reuse gdjs.New_32sceneCode.GDmijugadorObjects1 */

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDmijugadorObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDmijugadorObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDmijugadorObjects1[k] = gdjs.New_32sceneCode.GDmijugadorObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDmijugadorObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDmijugadorObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDmijugadorObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDmijugadorObjects1[i].setAnimation(2);
}
}}

}


}; //End of gdjs.New_32sceneCode.eventsList0x744aa0
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDLeftButtonObjects1Objects = Hashtable.newFrom({"LeftButton": gdjs.New_32sceneCode.GDLeftButtonObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDRightButtonObjects1Objects = Hashtable.newFrom({"RightButton": gdjs.New_32sceneCode.GDRightButtonObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDJumpButtonObjects1Objects = Hashtable.newFrom({"JumpButton": gdjs.New_32sceneCode.GDJumpButtonObjects1});gdjs.New_32sceneCode.eventsList0xb0cf8 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDTiledGrassPlatformObjects1.createFrom(runtimeScene.getObjects("TiledGrassPlatform"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDTiledGrassPlatformObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDTiledGrassPlatformObjects1[i].hide();
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7618716);
}
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "..\\imagenes\\trueno\\r1.ogg", true, 100, 1);
}}

}


{



}


{

gdjs.New_32sceneCode.GDmijugadorObjects1.length = 0;


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "RShift");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition1IsTrue_0;
gdjs.New_32sceneCode.GDmijugadorObjects1_1final.length = 0;gdjs.New_32sceneCode.condition0IsTrue_1.val = false;
gdjs.New_32sceneCode.condition1IsTrue_1.val = false;
{
gdjs.New_32sceneCode.GDmijugadorObjects2.createFrom(runtimeScene.getObjects("mijugador"));
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDmijugadorObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDmijugadorObjects2[i].getAnimation() == 0 ) {
        gdjs.New_32sceneCode.condition0IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDmijugadorObjects2[k] = gdjs.New_32sceneCode.GDmijugadorObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDmijugadorObjects2.length = k;if( gdjs.New_32sceneCode.condition0IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDmijugadorObjects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDmijugadorObjects1_1final.indexOf(gdjs.New_32sceneCode.GDmijugadorObjects2[j]) === -1 )
            gdjs.New_32sceneCode.GDmijugadorObjects1_1final.push(gdjs.New_32sceneCode.GDmijugadorObjects2[j]);
    }
}
}
{
gdjs.New_32sceneCode.GDmijugadorObjects2.createFrom(runtimeScene.getObjects("mijugador"));
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDmijugadorObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDmijugadorObjects2[i].getAnimation() == 2 ) {
        gdjs.New_32sceneCode.condition1IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDmijugadorObjects2[k] = gdjs.New_32sceneCode.GDmijugadorObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDmijugadorObjects2.length = k;if( gdjs.New_32sceneCode.condition1IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDmijugadorObjects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDmijugadorObjects1_1final.indexOf(gdjs.New_32sceneCode.GDmijugadorObjects2[j]) === -1 )
            gdjs.New_32sceneCode.GDmijugadorObjects1_1final.push(gdjs.New_32sceneCode.GDmijugadorObjects2[j]);
    }
}
}
{
gdjs.New_32sceneCode.GDmijugadorObjects1.createFrom(gdjs.New_32sceneCode.GDmijugadorObjects1_1final);
}
}
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
}

}


{

gdjs.New_32sceneCode.GDmijugadorObjects1.createFrom(runtimeScene.getObjects("mijugador"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDmijugadorObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDmijugadorObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDmijugadorObjects1[k] = gdjs.New_32sceneCode.GDmijugadorObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDmijugadorObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDmijugadorObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDmijugadorObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDmijugadorObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.New_32sceneCode.GDmijugadorObjects1.createFrom(runtimeScene.getObjects("mijugador"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDmijugadorObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDmijugadorObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDmijugadorObjects1[k] = gdjs.New_32sceneCode.GDmijugadorObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDmijugadorObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDmijugadorObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDmijugadorObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDmijugadorObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.New_32sceneCode.GDmijugadorObjects1.createFrom(runtimeScene.getObjects("mijugador"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDmijugadorObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDmijugadorObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDmijugadorObjects1[k] = gdjs.New_32sceneCode.GDmijugadorObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDmijugadorObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32sceneCode.eventsList0x744aa0(runtimeScene);} //End of subevents
}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDmijugadorObjects1.createFrom(runtimeScene.getObjects("mijugador"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDmijugadorObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDmijugadorObjects1[i].flipX(true);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDmijugadorObjects1.createFrom(runtimeScene.getObjects("mijugador"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDmijugadorObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDmijugadorObjects1[i].flipX(false);
}
}}

}


{



}


{


{
gdjs.New_32sceneCode.GDmijugadorObjects1.createFrom(runtimeScene.getObjects("mijugador"));
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.New_32sceneCode.GDmijugadorObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDmijugadorObjects1[0].getPointX(""))+170, "", 0);
}}

}


{



}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
}

}


{


{
}

}


{


{
}

}


{



}


{


/*Link should not have any generated code. You probably wrongly used a link in events without a layout.*/
}


{



}


{


/*Link should not have any generated code. You probably wrongly used a link in events without a layout.*/
}


{



}


{



}


{


{
}

}


{



}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDArrowButtonsBgObjects1.createFrom(runtimeScene.getObjects("ArrowButtonsBg"));
gdjs.New_32sceneCode.GDJumpButtonObjects1.createFrom(runtimeScene.getObjects("JumpButton"));
gdjs.New_32sceneCode.GDLeftButtonObjects1.createFrom(runtimeScene.getObjects("LeftButton"));
gdjs.New_32sceneCode.GDRightButtonObjects1.createFrom(runtimeScene.getObjects("RightButton"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDLeftButtonObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDLeftButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.New_32sceneCode.GDRightButtonObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDRightButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.New_32sceneCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDJumpButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.New_32sceneCode.GDArrowButtonsBgObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDArrowButtonsBgObjects1[i].hide();
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{

gdjs.New_32sceneCode.GDLeftButtonObjects1.createFrom(runtimeScene.getObjects("LeftButton"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDLeftButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDmijugadorObjects1.createFrom(runtimeScene.getObjects("mijugador"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDmijugadorObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDmijugadorObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.New_32sceneCode.GDRightButtonObjects1.createFrom(runtimeScene.getObjects("RightButton"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDRightButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
}

}


{

gdjs.New_32sceneCode.GDJumpButtonObjects1.createFrom(runtimeScene.getObjects("JumpButton"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDJumpButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDmijugadorObjects1.createFrom(runtimeScene.getObjects("mijugador"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDmijugadorObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDmijugadorObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


}; //End of gdjs.New_32sceneCode.eventsList0xb0cf8


gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.New_32sceneCode.GDTiledGrassPlatformObjects1.length = 0;
gdjs.New_32sceneCode.GDTiledGrassPlatformObjects2.length = 0;
gdjs.New_32sceneCode.GDTiledGrassPlatformObjects3.length = 0;
gdjs.New_32sceneCode.GDCloudObjects1.length = 0;
gdjs.New_32sceneCode.GDCloudObjects2.length = 0;
gdjs.New_32sceneCode.GDCloudObjects3.length = 0;
gdjs.New_32sceneCode.GDLeftButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDLeftButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDLeftButtonObjects3.length = 0;
gdjs.New_32sceneCode.GDRightButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDRightButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDRightButtonObjects3.length = 0;
gdjs.New_32sceneCode.GDJumpButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDJumpButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDJumpButtonObjects3.length = 0;
gdjs.New_32sceneCode.GDArrowButtonsBgObjects1.length = 0;
gdjs.New_32sceneCode.GDArrowButtonsBgObjects2.length = 0;
gdjs.New_32sceneCode.GDArrowButtonsBgObjects3.length = 0;
gdjs.New_32sceneCode.GDmijugadorObjects1.length = 0;
gdjs.New_32sceneCode.GDmijugadorObjects2.length = 0;
gdjs.New_32sceneCode.GDmijugadorObjects3.length = 0;
gdjs.New_32sceneCode.GDtruenoObjects1.length = 0;
gdjs.New_32sceneCode.GDtruenoObjects2.length = 0;
gdjs.New_32sceneCode.GDtruenoObjects3.length = 0;
gdjs.New_32sceneCode.GDlluviaObjects1.length = 0;
gdjs.New_32sceneCode.GDlluviaObjects2.length = 0;
gdjs.New_32sceneCode.GDlluviaObjects3.length = 0;
gdjs.New_32sceneCode.GDnbObjects1.length = 0;
gdjs.New_32sceneCode.GDnbObjects2.length = 0;
gdjs.New_32sceneCode.GDnbObjects3.length = 0;
gdjs.New_32sceneCode.GDpiedraObjects1.length = 0;
gdjs.New_32sceneCode.GDpiedraObjects2.length = 0;
gdjs.New_32sceneCode.GDpiedraObjects3.length = 0;
gdjs.New_32sceneCode.GDcasaObjects1.length = 0;
gdjs.New_32sceneCode.GDcasaObjects2.length = 0;
gdjs.New_32sceneCode.GDcasaObjects3.length = 0;
gdjs.New_32sceneCode.GDarbObjects1.length = 0;
gdjs.New_32sceneCode.GDarbObjects2.length = 0;
gdjs.New_32sceneCode.GDarbObjects3.length = 0;

gdjs.New_32sceneCode.eventsList0xb0cf8(runtimeScene);
return;
}
gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
