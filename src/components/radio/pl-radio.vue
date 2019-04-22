<template>
    <button class="pl-radio"
            @click="p_click"
            :class="classes"
            :style="styles">
        <div class="pl-radio-icon-wrapper">
            <transition name="pl-transition-scale">
                <pl-icon :icon="p_activeIcon" class="pl-radio-icon" v-if="p_value" key="active"/>
                <pl-icon :icon="p_inactiveIcon" class="pl-radio-icon" v-else key="inactive"/>
            </transition>
        </div>
        <span v-if="!!label" class="pl-radio-label">{{label}}</span>
    </button>
</template>

<script>

    import PlIcon from "../pl-icon";
    import {ValueMixin} from "../../mixin/component-mixin";

    export default {
        name: "pl-radio",
        components: {PlIcon},
        mixins: [ValueMixin],
        props: {
            value: {},                                          //当前值
            id: {},                                             //当前id，只有与radioGroup一起使用才有效
            color: {type: String,},                             //颜色：primary|success|warn|error|info
            size: {type: String,},                              //大小：large|default|small
            label: {type: String},                              //文本
            disabled: {type: Boolean,},                         //是否禁用
            readonly: {type: Boolean},                          //是否只读
            activeIcon: {type: String,},                        //激活的时候的图标
            inactiveIcon: {type: String,},                      //未激活的时候的秃笔哦啊
            activeColor: {type: String,},                       //激活的时候的颜色
            inactiveColor: {type: String},                      //未激活的时候的颜色
            trueValue: {default: true},                         //激活的时候的实际值
            falseValue: {default: false},                       //未激活的时候的实际值
            isCheckAllRadio: {type: Boolean, default: false},   //是否为全选radio
        },
        data() {
            return {
                p_group: null,
                p_value: this.value,
                p_watchValue: false,
            }
        },
        watch: {
            value(val) {
                const v = !!this.p_value ? this.trueValue : this.falseValue
                val !== v && (this.p_value = val === this.trueValue)
            },
        },
        mounted() {
            if (!!this.isCheckAllRadio) return
            this.p_group = this.$plain.$dom.findComponentUpward(this, 'pl-radio-group');
            if (!!this.p_group) {
                this.p_group.p_addRadio(this)
                if (this.p_group.multiple) {
                    if (!this.id) {
                        console.error(`radio must have id when radio-p_group's multiple is true!`);
                        return;
                    }
                    this.p_value = this.$plain.$utils.oneOf(this.id, this.p_group.multipleValue);
                } else {
                    this.p_value = this.p_group.singleValue === this.id;
                }
            }
        },
        beforeDestroy() {
            !!this.p_group && (this.p_group.p_removeRadio(this))
        },
        computed: {
            p_size() {
                return !!this.size ? this.size : (!!this.p_group && !!this.p_group.size) ? this.p_group.size : 'default';
            },
            p_color() {
                return !!this.color ? this.color : (!!this.p_group && !!this.p_group.color) ? this.p_group.color : 'primary';
            },
            p_activeIcon() {
                return !this.p_group ? !!this.activeIcon ? this.activeIcon : 'pad-check-square-fill' : !!this.p_group.activeIcon ? this.p_group.activeIcon : !!this.p_group.multiple ? 'pad-check-square-fill' : 'pl-circle-radio'
            },
            p_inactiveIcon() {
                return !this.p_group ? !!this.inactiveIcon ? this.inactiveIcon : 'pl-square' : !!this.p_group.inactiveIcon ? this.p_group.inactiveIcon : !!this.p_group.multiple ? 'pl-square' : 'pl-circle'
            },
            p_activeColor() {
                return !!this.activeColor ? this.activeColor : (!!this.p_group && !!this.p_group.activeColor) ? this.p_group.activeColor : 'primary';
            },
            p_inactiveColor() {
                return !!this.inactiveColor ? this.inactiveColor : (!!this.p_group && !!this.p_group.inactiveColor) ? this.p_group.inactiveColor : 'primary';
            },
            classes() {
                return [
                    `pl-radio-color-${!!this.disabled ? 'disabled' : this.p_color}`,
                    `pl-radio-size-${this.p_size}`,
                ]
            },
            styles() {
                let styles = {};
                !!this.p_activeColor && (!!this.p_value) && (styles.color = `${this.p_activeColor} !important`);
                !!this.p_inactiveColor && (!this.p_value) && (styles.color = `${this.p_inactiveColor} !important`);
                return styles;
            },
        },
        methods: {
            p_click(e) {
                if (!!this.disabled || !!this.readonly) return;
                if (!!this.p_group) {
                    if (!this.p_group.multiple) {
                        if (!!this.p_value) return
                        this.p_group.p_radios.forEach(radio => radio !== this && (radio.p_value = false))
                        this.p_group.singleValue = this.id
                    } else {
                        if (!this.p_value) this.p_group.multipleValue.push(this.id);
                        else this.$plain.$utils.removeFromArray(this.p_group.multipleValue, this.id);
                    }
                }
                this.p_value = !this.p_value;
                this.$emit('click', e);
                this.$emit('change', this.p_value);
                this.p_emitValue()
            },
            p_emitValue() {
                this.$emit('input', !!this.p_value ? this.trueValue : this.falseValue)
            },
        }
    }
</script>