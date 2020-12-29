<template>
  <div>
    <h3>模拟cas登录</h3>
  </div>
</template>

<script>
import { fetchList } from "@/api/coupon";
export default {
  components: {
  },
  data() {
    return {
      listLoading: true,
      list: null,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.listLoading = true;
      fetchList(this.listQuery).then((response) => {
        this.listLoading = false;
        this.list = response.data.list;
        this.total = response.data.total;
      });
    },
  },
};
</script>