<template>
    <div class="demo-message">
        <im-demo-row title="基本用法">
            <im-button @click="$message.show('操作成功！')" label="basically"/>
        </im-demo-row>
        <im-demo-row title="提示类型">
            <im-button @click="$message.show('操作成功！',{type:'white'})" label="white" box-color="primary"/>
            <im-button @click="$message.show('操作成功！',{type:'black',})" label="black" box-color="primary"/>
            <im-button @click="$message.show('操作成功！',{type:'info'})" label="info" box-color="primary"/>
            <im-button @click="$message.show('操作成功！',{type:'success'})" label="success" box-color="success"/>
            <im-button @click="$message.show('操作成功！',{type:'warn'})" label="warn" box-color="warn"/>
            <im-button @click="$message.show('操作成功！',{type:'error'})" label="error" box-color="error"/>
            <im-button @click="$message.show('操作成功！',{type:'help'})" label="help" box-color="info"/>
        </im-demo-row>
        <im-demo-row title="位置">
            <im-button @click="$message.show('操作成功！',{horizontal:'start',vertical:'start'})" label="左上"/>
            <im-button @click="$message.show('操作成功！',{horizontal:'center',vertical:'start'})" label="中上"/>
            <im-button @click="$message.show('操作成功！',{horizontal:'end',vertical:'start'})" label="右上"/>
            <im-button @click="$message.show('操作成功！',{horizontal:'start',vertical:'center'})" label="左中"/>
            <im-button @click="$message.show('操作成功！',{horizontal:'center',vertical:'center'})" label="中中"/>
            <im-button @click="$message.show('操作成功！',{horizontal:'end',vertical:'center'})" label="右中"/>
            <im-button @click="$message.show('操作成功！',{horizontal:'start',vertical:'end'})" label="左下"/>
            <im-button @click="$message.show('操作成功！',{horizontal:'center',vertical:'end'})" label="中下"/>
            <im-button @click="$message.show('操作成功！',{horizontal:'end',vertical:'end'})" label="右下"/>
        </im-demo-row>
        <im-demo-row>
            <im-button @click="$message.show('操作成功！',{time:1000,done:()=>$plain.log('done')})" label="一秒后自动关闭"/>
            <im-button @click="$message.show('操作成功！',{time:null})" label="不自动关闭"/>
            <im-button @click="$message.show('操作成功！',{done:()=>$message.show('done')})" label="监听结束事件"/>
            <im-button @click="$message.show('操作成功！',{click:()=>$message.show('click')})" label="监听点击事件"/>
        </im-demo-row>
    </div>
</template>

<script>

    export default {
        name: "demo-message",
    }
</script>

<style lang="scss">

</style>