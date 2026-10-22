<template>
  <div>
    <el-container style="height: 900px; border: 2px solid red">
      <el-header style="font-size: 40px; background-color: rgb(238, 241, 246)"
        >Quiz后台管理</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu :default-openeds="['1']">
            <el-submenu index="1">
              <template slot="title"
                ><i class="el-icon-message"></i>系统信息管理</template
              >
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <router-link to="/user">用户管理</router-link>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <router-link to="/question">题目管理</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-main>
          <!-- 用于数据插入的表单 -->
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="用户名">
              <el-input
                v-model="formInline.user"
                placeholder="用户名"
              ></el-input>
            </el-form-item>

            <!-- <el-form-item label="活动区域">
              <el-select v-model="formInline.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item> -->

            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询用户</el-button>
            </el-form-item>

            <el-form-item>
              <!-- <el-button type="primary" @click="onAdd">添加用户</el-button> -->
              <el-button type="success" @click="dialogFormVisible = true">添加用户</el-button>
            </el-form-item>

            
          </el-form>

          <!-- 表格显示部分 -->
          <el-table :data="tableData" style="width: 100%">
            <el-table-column label="日期" width="180">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="用户名" width="180">
              <template slot-scope="scope">
                <!-- <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.name }}</p>
                  <p>住址: {{ scope.row.address }}</p> -->
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                <!-- </el-popover> -->
              </template>
            </el-table-column>

            <el-table-column label="密码" width="180">
              <template slot-scope="scope">
                <!-- <i class="el-icon-time"></i> -->
                <span style="margin-left: 10px">{{ scope.row.password }}</span>
              </template>
            </el-table-column>

            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"
                  >编辑</el-button
                >
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <br />

          <!-- 分页条 -->
          <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination>

           <el-dialog title="新用户" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="初始密码" :label-width="formLabelWidth">
                <el-input v-model="form.password" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="确认密码" :label-width="formLabelWidth">
                <el-input v-model="form.confirmpassword" autocomplete="off"></el-input>
              </el-form-item>

              <!-- <el-form-item label="选项C" :label-width="formLabelWidth">
                <el-input v-model="form.optionc" autocomplete="off"></el-input>
              </el-form-item> -->

              <!-- <el-form-item label="选项D" :label-width="formLabelWidth">
                <el-input v-model="form.optiond" autocomplete="off"></el-input>
              </el-form-item> -->

              <!-- <el-form-item label="答案" :label-width="formLabelWidth">
                <el-input v-model="form.answer" autocomplete="off"></el-input>
              </el-form-item> -->
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="onSubmitNewUser()">确 定</el-button>
            </div>
          </el-dialog>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {

    return {
      dialogFormVisible: false,

      formInline: {
        user: "",
        region: "",
      },

      form: {
        // 对话框表单数据
        name: "",
        password: "",
        confirmpassword:"",
      },

      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          password: "123456",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          password: "123456",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          password: "123456",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          password: "123456",
        },
      ],
    };
  },

  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    onSubmit() {
      console.log("Submit:", this.formInline);
    },
    onSubmitNewUser(){
      this.dialogFormVisible=false;
    },
    onAddUser() {
      console.log("Adduser");
    },
  },
};
</script>

<style>
</style>