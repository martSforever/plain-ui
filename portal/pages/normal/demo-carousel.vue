<template>
    <div class="demo-carousel">
        <im-demo-row title="基本用法">
            <im-demo-row-item title="使用双向绑定控制展示的索引位置" width="250px">
                <im-button :label="index" box-type="line"/>
                <im-button label="prev" @click="index--"/>
                <im-button label="next" @click="index++"/>
            </im-demo-row-item>
            <div class="demo-carousel-box">
                <im-carousel :data="[1,2,3,4,5]" v-model="index">
                    <div slot-scope="{item,index}" class="demo-carousel-item">
                        {{item}}
                    </div>
                </im-carousel>
            </div>
        </im-demo-row>
        <im-demo-row title="禁用滑动">
            <div class="demo-carousel-box">
                <im-carousel :data="[1,2,3,4,5]" disabled-swipe>
                    <div slot-scope="{item,index}" class="demo-carousel-item">
                        {{item}}
                    </div>
                </im-carousel>
            </div>
        </im-demo-row>
        <im-demo-row title="自动播放">
            <div class="demo-carousel-box">
                <im-carousel :data="[1,2,3,4,5]" auto-play :auto-play-duration="1000">
                    <div slot-scope="{item,index}" class="demo-carousel-item">
                        {{item}}
                    </div>
                </im-carousel>
            </div>
        </im-demo-row>
        <im-demo-row title="禁用前后按钮">
            <div class="demo-carousel-box">
                <im-carousel :data="[1,2,3,4,5]" disabled-button>
                    <div slot-scope="{item,index}" class="demo-carousel-item">
                        {{item}}
                    </div>
                </im-carousel>
            </div>
        </im-demo-row>
        <im-demo-row title="禁用指示器">
            <div class="demo-carousel-box">
                <im-carousel :data="[1,2,3,4,5]" disabled-dot>
                    <div slot-scope="{item,index}" class="demo-carousel-item">
                        {{item}}
                    </div>
                </im-carousel>
            </div>
        </im-demo-row>
        <im-demo-row title="自定义覆盖内容">
            <div class="demo-carousel-box">
                <im-carousel :data="[1,2,3,4,5]" disabled-dot>
                    <div slot-scope="{item,index}" class="demo-carousel-item">
                        {{item}}
                    </div>
                    <div slot="hover" class="demo-carousel-box-hover">
                        demo-carousel-box-hover
                    </div>
                </im-carousel>
            </div>
        </im-demo-row>
    </div>
</template>

<script>
    export default {
        name: "demo-carousel",
        data() {
            return {
                index: 0
            }
        },
    }
</script>

<style lang="scss">
    @include themeWrap{
        .demo-carousel {
            .demo-carousel-box {
                width: 400px;
                height: 150px;
                background-color: #f2f2f2;

                .demo-carousel-item {
                    height: 100%;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: plVar(colorPrimary);
                    color: white;
                    font-weight: 600;
                }
            }

            .demo-carousel-box-hover {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                height: 40px;
            }
        }
    }
</style>