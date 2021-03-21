<template>
	<view class="page">
		<!-- 信息表单部分 -->
		<add-form
			:data="formList"
			title="司机信息"
			@handleInput="getInfoFormInput"
			@handleChange="getInfoFormChange"
		></add-form>

		<!-- 上传图片+表单部分 -->
		<upload-image
			wrapClass="margin-top"
			:data="uploadImageList"
			@handleInput="getUploadInput"
			@handleChooseImage="getUploadChoose"
		/>

		<!-- 商品表单部分 -->
		<view class="margin-top">
			<view class="sticky-top-0 cu-bar bg-white shadow-grey">
				<view class="action">
					<text class="cuIcon-titles text-green"></text>
					<text class="text-xl text-bold">来货单</text>
				</view>
				<view class="action text-xxl" @click="handlePushProduct">
					<text class="cuIcon-roundaddfill text-green"></text>
					<text class="text-green text-xl padding-left-xs">商品</text>
				</view>
			</view>
			<block v-for="(item, index) in productList" :key="index">
				<add-form
					:wrapClass="index === 0 ? 'margin-top-xs margin-right-sm margin-bottom-sm margin-left-sm' : 'margin-sm'"
					:data="item"
					:formIndex="index"
					@handleInput="getProductFormInput"
					@handleChange="getProductFormChange"
					@handleArrowRightClick="handleArrowRightClick"
				>
					<template v-slot:footer>
						<view class="action bg-white padding text-right text-xxl" @click="handlePopProduct(index)">
							<text class="cuIcon-deletefill text-red"></text>
						</view>
					</template>
				</add-form>
			</block>
		</view>

		<view class="sticky-bottom-0 padding">
			<u-button
				bgColor="green"
				text="提 交"
				block
				:disabled="disabled"
				:loading="loading"
				@handleClick="onSubmit"
			/>
		</view>
		
		<view id="scrolltobottom"></view>
	</view>
</template>

<script>
import AddForm from './components/AddForm/index.vue'
import UUpload from '@/components/basics/u-upload/u-upload.vue'
import UploadImage from './components/UploadImage/index.vue'
import UButton from '@/components/basics/u-button/u-button.vue'
import { formatTimes } from '@/utils/index'
export default {
	name: 'addReport',
	components: {
		AddForm,
		UUpload,
		UploadImage,
		UButton,
	},
	data() {
		return {
			formList: [
				{
					prop: 'key',
					label: '档位号码',
					value: '',
					placeholder: '请选择(必填)',
					tip: '请选择档位号码',
				},
				{
					label: '车牌号码',
					value: '',
					placeholder: '请输入(必填)',
					tip: '请输入车牌号码',
				},
				{
					label: '司机姓名',
					value: '',
					placeholder: '请输入(必填)',
					tip: '请输入司机姓名',
				},
				{
					label: '司机手机',
					value: '',
					placeholder: '请输入(必填)',
					type: 'number',
					tip: '请输入正确手机号码',
					regular: /^1[1-9]{1}[0-9]{9}/,
				},
				{
					label: '到场日期',
					value: '',
					// value: ['浙江省', '杭州市', '上城区'],
					placeholder: '请选择(必填)',
					tip: '请选择到场日期',
					component: 'picker',
					type: 'date',
					// type: 'region',
					// range: ['中国', '美国', '巴西', '日本'],
					// range: [{a: 'a', b: 'b'}, {a: 'aa', b: 'bb'}],
					// rangeKey: 'a',
					// range: [["a","b"], ["c","d"]]
				},
			],
			uploadImageList: [
				{
					title: '产地证明',
					label: '产地证号',
					value: '',
					placeholder: '请输入产地证号',
					type: 'number',
				},
				{
					title: '检测报告',
					label: '相关检测报告号',
					value: '',
					placeholder: '请输入检测报告号',
					type: 'number',
				},
				{
					title: '进货单据',
					label: '相关进货单据号',
					value: '',
					placeholder: '请输入进货单据号',
					type: 'number',
				},
				{
					title: '供货商信息',
					label: '身份证号码',
					value: '',
					placeholder: '请输入身份证号码',
					type: 'idcard',
					customChoose: [
						{
							bottomText: '正面照片'
						},
						{
							bottomText: '反面照片'
						}
					],
				},
			],
			productList: [],
			productListTemp: [
				{
					label: '品类',
					value: '',
					placeholder: '请选择(必填)',
					tip: '请选择品类',
					arrowRight: true,
				},
				{
					label: '品名',
					value: '',
					placeholder: '请输入(必填)',
					tip: '请输入品名',
				},
				{
					label: '重量(kg)',
					value: '',
					placeholder: '请输入(必填)',
					type: 'digit',
					tip: '请输入重量(kg)',
				},
				{
					label: '场地',
					value: [],
					placeholder: '请选择(必填)',
					tip: '请选择场地',
					component: 'picker',
					type: 'region',
				}
			],
			disabled: false,
			loading: false
		}
	},
	
	onLoad(e) {
		// 监听页面加载，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参）
		console.log('Page Load', e)
		this.init()
	},
	methods: {
		init() {
			this.setFormDefaultValue(this.formList)
			this.setProductListItem()
		},

		setFormDefaultValue(formList) {
			formList.map(item => {
				if(item.component === 'picker'){
					item.value = this.setDefaultValue(item.type)
				}
			})
		},
		setProductDefaultValue(productList) {
			productList.map(item => {
				if(item.component === 'picker'){
					item.value = this.setDefaultValue(item.type)
				}
			})
		},
		setDefaultValue(type) {
			const typeJson = {
				'date': () => formatTimes(new Date(), 'date', '-'),
				'region': () => ['浙江省', '杭州市', '上城区']
			}
			return typeJson[type]()
		},

		// 司机信息组件模块
		getInfoFormInput(formIndex, value, index) {
			this.$set(this.formList[index], 'value', value.trim())
		},
		getInfoFormChange(formIndex, value, index) {
			this.$set(this.formList[index], 'value', value)
		},

		// 检测信息组件模块
		getUploadInput(value, index) {
			this.$set(this.uploadImageList[index], 'value', value.trim())
		},
		getUploadChoose(e, list) {
			console.log('getUploadChoose------', e, list)
		},

		// 来货单组件模块
		getProductFormInput(formIndex, value, index) {
			this.$set(this.productList[formIndex][index], 'value', value.trim())
		},
		getProductFormChange(formIndex, value, index) {
			this.$set(this.productList[formIndex][index], 'value', value)
		},
		handleArrowRightClick(formIndex, item, index) {
			uni.$on('select', this.listenSelectEvent)
			this.uRouter({url: `../getCategory/index?formIndex=${formIndex}&index=${index}`})
		},
		// 监听到全局的select事件
		listenSelectEvent(data) {
			this.$set(this.productList[data.formIndex][data.index], 'value', data.name)
			uni.$on('select', this.listenSelectEvent)
		},
		
		setProductListItem() {
			const productListTemp = JSON.parse(JSON.stringify(this.productListTemp))
			this.setProductDefaultValue(productListTemp)
			this.productList.push(productListTemp)
		},
		// 新增 来货单商品组
		handlePushProduct() {
			this.setProductListItem()
			this.pageScrollToBottom()
		},
		// 删除 来货单商品组
		handlePopProduct(index) {
			this.productList.splice(index, 1)
		},
		
		// 页面滚动到底部
		pageScrollToBottom() {
			setTimeout(() => {
				uni.pageScrollTo({
					selector: '#scrolltobottom'
				})
			}, 100)
		},

		onSubmit() {
			console.log('productList', this.productList)
			let flag = true
			const filter = this.formList.filter(item => {
				const must = item.placeholder.indexOf('必填') != -1
				if(item.regular){
					return must && !item.regular.test(item.value)
				}
				return must && !item.value
			})
			if(filter && filter.length){
				uni.showToast({
					title: filter[0].tip,
					duration: 2000,
					icon: 'none'
				})
				flag = false
			}
			if(flag){
				console.log('formList', this.formList)
				console.log('uploadImageList', this.uploadImageList)
				console.log('productList', this.productList)
			}
		},
	}
}
</script>

<style lang="scss" scoped>
.page {
	.sticky {
		position: sticky;
		width: 100%;
		z-index: 5;
	}
	.sticky-top-0 {
		@extend .sticky;
		top: 0;
	}
	.sticky-bottom-0 {
		@extend .sticky;
		bottom: 0;
		// background-color: #f1f1f1;
	}
}
</style>
