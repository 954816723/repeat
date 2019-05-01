<template>
  <div id="app">
		<a-layout class="container_full">
			<a-layout-sider class="sider" collapsible v-model="collapsible">
				<div class="logo"></div>
				<a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
					<a-menu-item key="1">
						<a-icon type="user"></a-icon>
						<span>user</span>
					</a-menu-item>
					<a-menu-item key="2">
						<a-icon type="desktop"></a-icon>
						<span>desktop</span>
					</a-menu-item>
					<a-sub-menu key="sub1">
						<span slot="title"><a-icon type="menu"></a-icon><span>menu</span></span>
						<a-menu-item key="3">menu1</a-menu-item>
						<a-menu-item key="4">menu2</a-menu-item>
						<a-menu-item key="5">menu3</a-menu-item>
					</a-sub-menu>
					<a-menu-item key="6">
						<a-icon type="team"></a-icon>
						<span>team</span>
					</a-menu-item>
				</a-menu>
				<!-- <a-icon type="tragger" @click="()=>collapsible = !collapsible"></a-icon> -->
			</a-layout-sider>
			<a-layout class="container">
				<a-layout-header class="header">Ant-Design</a-layout-header>
				<a-layout-content class="content">
					<div>
						<div>Button</div>
						<a-button type="primary" icon="search">primary</a-button>
						<a-button type="primary" shape="circle">圆</a-button>
						<a-button>default</a-button>
						<a-button type="dashed">dashed</a-button>
						<a-button type="danger">danger</a-button>
						<a-button disabled>disabled</a-button>
						<div style="background:#ccc;width:100px;display:inline-block;text-align:center">
							<a-button ghost>ghost</a-button>
						</div>
						<br>
						<a-button-group size="small">
							<a-button type="primary">primary</a-button>
							<a-button>default</a-button>
						</a-button-group>
						<a-button loading>Loading</a-button>
						<a-dropdown>
							<a-button>
							下拉
							<a-icon type="down"></a-icon>
							</a-button>
							<a-menu slot="overlay">
							<a-menu-item key="1">1</a-menu-item>
							<a-menu-item key="2">2</a-menu-item>
							<a-menu-item key="3">3</a-menu-item>
							</a-menu>
						</a-dropdown>
						<a-pagination v-model="current" :total="50" showQuickJumper />
					</div>
				</a-layout-content>
				<a-layout-footer class="footer">
					Ant Design ©2019 made by me
				</a-layout-footer>
			</a-layout>
		</a-layout>
  </div>
</template>
<script>
export default {
	data(){
		return{
			collapsible:false
		}
	}
}
</script>

<style lang="less">
.container_full{
	.sider{
		height: 100vh;
		.logo{
			height: 32px;
			margin:16px;
			background:lightblue;
		}
	}
	.container{
		.header{
			background: #7dbcea;
		}
		.content{
			// background: #3ba0e9;
		}
		.footer{
			// position: fixed;
			// bottom:0;
			width: 100%;
			text-align: center;
		}
	}
}
</style>
