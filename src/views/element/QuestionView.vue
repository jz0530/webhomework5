<template>
  <div>
    <el-container style="height: 900px; border: 2px solid red">
      <el-header style="font-size: 40px; background-color: rgb(238, 241, 246)"
        >Quiz后台管理</el-header
      >
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
            <el-form-item label="题目">
              <el-input
                v-model="formInline.user"
                placeholder="题目关键词"
              ></el-input>
            </el-form-item>

            <!-- <el-form-item label="活动区域">
              <el-select v-model="formInline.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item> -->

            <el-form-item>
              <el-button type="success" @click="onSubmit">查询题目</el-button>
            </el-form-item>

            <el-form-item>
              <!-- <el-button type="success" @click="onAddQuestion"
                >添加题目</el-button -->
              <el-button type="success" @click="dialogFormVisible = true"
                >添加题目</el-button
              >
            </el-form-item>
          </el-form>

          <!-- 表格显示部分 -->
          <el-table :data="tableData" border>
            <el-table-column prop="index" label="序号" width="140">
            </el-table-column>
            <el-table-column prop="question" label="问题" width="120">
            </el-table-column>
            <el-table-column prop="options" label="选项" width="120">
            </el-table-column>
            <el-table-column prop="answer" label="答案"> </el-table-column>
            <el-table-column label="操作">
              <!-- <template slot-scope="scope"> -->
              <template>
                <el-button size="mini" @click="handleEdit()">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete()"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>

          <br />

          <!-- 分页条 -->
          <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination>

          <!-- 添加题目对话框 -->
          <el-dialog title="题目" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="问题内容" :label-width="formLabelWidth">
                <el-input v-model="form.quetion" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="选项A:" :label-width="formLabelWidth">
                <el-input v-model="form.optiona" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="选项B:" :label-width="formLabelWidth">
                <el-input v-model="form.optionb" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="选项C" :label-width="formLabelWidth">
                <el-input v-model="form.optionc" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="选项D" :label-width="formLabelWidth">
                <el-input v-model="form.optiond" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="答案" :label-width="formLabelWidth">
                <el-input v-model="form.answer" autocomplete="off"></el-input>
              </el-form-item>

              <!-- <el-form-item label="活动区域" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item> -->
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="onSubmitNewQuestion()">确 定</el-button>
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
    const item = {
      index: "1",
      question: "法国的首都是什么?",
      options: "巴黎,巴黎,巴黎,巴黎",
      answer: "巴黎",
    };
    return {
      dialogTableVisible: false,
      dialogFormVisible: false, // 控制对话框显示
      form: {
        // 对话框表单数据
        question: "",
        optiona: "",
        optionb:"",
        optionc:"",
        optiond:"",
        answer:""
      },
      formLabelWidth: "120px", // 对话框标签宽度
      tableData: Array(5).fill(item),
      formInline: {
        user: "",
        region: "",
      },
    };
  },
  methods: {
    onSubmitNewQuestion() {
      this.dialogFormVisible = false;
      // alert("add new question");
    },
    onSubmit() {
      alert("form submit!");
    },
    onAddQuestion() {
      alert("onAddQuestion!");
      // this.dialogFormVisible = true;
    },
    handleEdit() {
      alert("handleExit");
    },
    handleDelete() {
      alert("handleDelete");
    },
  },
};
</script>

<style>
</style>