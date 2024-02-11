<script setup>
import Sidebar from "../components/Sidebar.vue";
import { useRoute } from "vue-router";
import province from "../assets/js/province";
import city from "../assets/js/city";
import { ref, reactive, watch } from "vue";
import Modal from "../components/Modal.vue";

const route = useRoute();
const dataProvince = ref(province);
const dataCity = ref(city);
const idProvince = ref();
const showModal = ref(false);
const itemCity = ref();
const sort = reactive({
  sortBy: "id",
  option: "asc",
});

const getCityByIdProvince = (id) => {
  return city.filter((city) => city.provinsi_id === parseInt(id));
};

const getNameProvinceByIdCity = (id) => {
  const dataCity = city.filter((city) => city.id === id)[0];
  return province.filter((province) => province.id === dataCity.provinsi_id)[0]
    .name;
};

const sortProvince = ({ sortBy, option }) => {
  if (sortBy === "id") {
    const resultSort = province.sort((a, b) => a.id - b.id);
    return option === "asc" ? resultSort : resultSort.reverse();
  }

  if (sortBy === "name") {
    const resultSort = province.sort((a, b) => {
      return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
    });
    return option === "asc" ? resultSort : resultSort.reverse();
  }
};

const viewNameClick = (item) => {
  const nameProvince = getNameProvinceByIdCity(item.id);
  itemCity.value = { ...item, name_province: nameProvince };
  showModal.value = !showModal.value;
};

watch(idProvince, () => {
  if (idProvince.value) {
    dataCity.value = getCityByIdProvince(parseInt(idProvince.value));
    return;
  }

  dataCity.value = city;
});

watch(sort, () => {
  dataProvince.value = sortProvince(sort);
});
</script>

<template>
  <div class="flex w-full h-screen font-inter">
    <Sidebar :path="route.path" />
    <div class="w-full bg-slate-100">
      <h1 class="px-8 py-4 font-semibold bg-white drop-shadow">Conversion</h1>
      <div class="flex flex-col w-full gap-3 px-4 py-2">
        <section
          class="w-full bg-white rounded-t-[10px] flex flex-col drop-shadow"
        >
          <div class="flex items-center justify-between p-4">
            <h2 class="font-semibold text-[18px]">City List</h2>
            <div class="flex items-center gap-2">
              <label for="id-provinsi" class="text-sm"
                >Filter berdasarkan id provinsi</label
              >
              <input
                name="id-provinsi"
                placeholder="masukan id"
                class="w-40 px-2 text-sm border-none rounded outline-none ring ring-slate-200 placeholder-slate-200 focus:ring-slate-400"
                v-model="idProvince"
                type="text"
              />
            </div>
          </div>
          <div class="h-[190px] bg-white drop-shadow overflow-y-auto">
            <table
              class="w-full border-t border-collapse border-gray-200 table-auto"
            >
              <thead>
                <tr class="bg-[#FAFBFC] text-left drop-shadow">
                  <th class="py-2 text-center">ID</th>
                  <th class="py-2">Name</th>
                  <th class="py-2 text-center">Ref Id</th>
                  <th class="py-2 text-center">Province Id</th>
                  <th class="py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="text-sm font-medium text-[#686868] bg-white drop-shadow"
                  v-for="item in dataCity"
                >
                  <td class="px-3 py-4 text-center">{{ item.id }}</td>
                  <td class="text-[#080808]">{{ item.name }}</td>
                  <td class="text-center">{{ item.ref_id }}</td>
                  <td class="text-center">{{ item.provinsi_id }}</td>
                  <td>
                    <div class="flex justify-center gap-1">
                      <Button
                        @click="viewNameClick(item)"
                        class="px-3 py-2 bg-white text-[#080808] drop-shadow"
                      >
                        Info
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section
          class="w-full bg-white rounded-t-[10px] flex flex-col drop-shadow"
        >
          <div class="flex items-center justify-between p-4">
            <h2 class="font-semibold text-[18px]">Province List</h2>
            <div class="flex items-center gap-4">
              <select
                v-model="sort.sortBy"
                class="w-40 px-2 text-sm border-none rounded outline-none ring ring-slate-200 placeholder-slate-200 focus:ring-slate-400"
              >
                <option disabled value="">Please select one</option>
                <option value="id">Id</option>
                <option value="name">Name</option>
              </select>
              <select
                v-model="sort.option"
                class="w-40 px-2 text-sm border-none rounded outline-none ring ring-slate-200 placeholder-slate-200 focus:ring-slate-400"
              >
                <option disabled value="">Please select one</option>
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
              </select>
            </div>
          </div>
          <div class="h-[190px] bg-white drop-shadow overflow-y-auto">
            <table
              class="w-full border-t border-collapse border-gray-200 table-auto"
            >
              <thead>
                <tr class="bg-[#FAFBFC] text-left drop-shadow">
                  <th class="py-2 text-center">ID</th>
                  <th class="py-2">Name</th>
                  <th class="py-2 text-center">Wilayah Id</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="text-sm font-medium text-[#686868] bg-white drop-shadow"
                  v-for="item in dataProvince"
                >
                  <td class="px-3 py-4 text-center">{{ item.id }}</td>
                  <td class="text-[#080808]">{{ item.name }}</td>
                  <td class="text-center">{{ item.wilayah_id }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
    <Modal :show="showModal" @close="showModal = !showModal">
      <div class="flex flex-col gap-2 w-60">
        <h4 class="font-medium text-[32px] text-center">Info</h4>
        <p class="text-center">
          {{ `Nama provinsi dari dari ${itemCity.name.toLowerCase()} adalah ` }}
          <span class="font-semibold text-center">{{
            itemCity.name_province
          }}</span>
        </p>
      </div>
    </Modal>
  </div>
</template>
