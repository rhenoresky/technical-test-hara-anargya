<script setup>
import { Icon } from "@iconify/vue";
import { useRoute } from "vue-router";
import Sidebar from "../components/Sidebar.vue";
import { onMounted, ref } from "vue";
import Modal from "../components/Modal.vue";

const route = useRoute();
const users = ref({});
const showModal = ref(false);
const dataUser = ref({});

const getUsers = async () => {
  const res = await fetch(
    "https://api.slingacademy.com/v1/sample-data/users"
  ).then((data) => data.json());

  users.value = res.users;
};

const detailClick = (user) => {
  dataUser.value = user;
  showModal.value = !showModal.value;
};

onMounted(async () => {
  await getUsers();
});
</script>

<template>
  <div class="flex w-full h-screen font-inter">
    <Sidebar :path="route.path" />
    <div class="w-full bg-slate-100">
      <h1 class="px-8 py-4 font-semibold bg-white drop-shadow">Conversion</h1>
      <div class="flex flex-col w-full gap-4 p-6">
        <section class="flex w-full gap-4">
          <div
            class="flex flex-col w-1/3 h-[140px] drop-shadow overflow-hidden bg-white rounded-[10px]"
          >
            <div class="h-[100px] w-full justify-between flex p-6">
              <div>
                <h3 class="text-sm font-semibold text-[#727272] mb-2">
                  Pending
                </h3>
                <p class="text-2xl font-bold">
                  2.480,<span class="text-[#9A9A9A]">30</span>
                </p>
              </div>
              <div class="p-2 text-lg rounded bg-slate-100 h-fit">
                <Icon
                  icon="solar:square-transfer-horizontal-broken"
                  style="font-size: 24px; color: grey"
                />
              </div>
            </div>
            <div class="w-full h-[40px] flex justify-between px-4 bg-[#F9FAFC]">
              <div class="flex items-center h-full gap-2">
                <div class="flex items-center h-full gap-1">
                  <div class="arrow-up">
                    <Icon
                      icon="ph:arrow-up-bold"
                      style="font-size: 18px; color: #4cbf93"
                    />
                  </div>
                  <p class="text-[#4CBF93] font-semibold text-[12px]">2,15%</p>
                </div>
                <h3 class="font-medium text-[12px] text-[#AAAAAA]">
                  Last month
                </h3>
              </div>
              <button class="text-[#6E6E6E] text-[12px] font-semibold">
                View More
              </button>
            </div>
          </div>
          <div
            class="flex flex-col w-1/3 h-[140px] drop-shadow overflow-hidden bg-white rounded-[10px]"
          >
            <div class="h-[100px] w-full justify-between flex p-6">
              <div>
                <h3 class="text-sm font-semibold text-[#727272] mb-2">Paid</h3>
                <p class="text-2xl font-bold">84.310</p>
              </div>
              <div class="p-2 text-lg rounded bg-slate-100 h-fit">
                <Icon
                  icon="solar:square-transfer-horizontal-broken"
                  style="font-size: 24px; color: grey"
                />
              </div>
            </div>
            <div class="w-full h-[40px] flex justify-between px-4 bg-[#F9FAFC]">
              <div class="flex items-center h-full gap-2">
                <div class="flex items-center h-full gap-1">
                  <div class="arrow-down">
                    <Icon
                      icon="ph:arrow-down-bold"
                      style="font-size: 18px; color: #ee7c85"
                    />
                  </div>
                  <p class="text-[#EE7C85] font-semibold text-[12px]">1,10%</p>
                </div>
                <h3 class="font-medium text-[12px] text-[#AAAAAA]">
                  Last month
                </h3>
              </div>
              <button class="text-[#6E6E6E] text-[12px] font-semibold">
                View More
              </button>
            </div>
          </div>
          <div
            class="flex flex-col w-1/3 h-[140px] drop-shadow overflow-hidden bg-white rounded-[10px]"
          >
            <div class="h-[100px] w-full justify-between flex p-6">
              <div>
                <h3 class="text-sm font-semibold text-[#727272] mb-2">
                  Rejected
                </h3>
                <p class="text-2xl font-bold">12.155</p>
              </div>
              <div class="p-2 text-lg rounded bg-slate-100 h-fit">
                <Icon
                  icon="solar:square-transfer-horizontal-broken"
                  style="font-size: 24px; color: grey"
                />
              </div>
            </div>
            <div class="w-full h-[40px] flex justify-between px-4 bg-[#F9FAFC]">
              <div class="flex items-center h-full gap-2">
                <div class="flex items-center h-full gap-1">
                  <div class="arrow-up">
                    <Icon
                      icon="ph:arrow-up-bold"
                      style="font-size: 18px; color: #4cbf93"
                    />
                  </div>
                  <p class="text-[#4CBF93] font-semibold text-[12px]">2,15%</p>
                </div>
                <h3 class="font-medium text-[12px] text-[#AAAAAA]">
                  Last month
                </h3>
              </div>
              <button class="text-[#6E6E6E] text-[12px] font-semibold">
                View More
              </button>
            </div>
          </div>
        </section>

        <section
          class="w-full bg-white rounded-t-[10px] flex flex-col drop-shadow"
        >
          <h2 class="p-6 font-semibold text-[18px]">User List</h2>
          <div class="h-[250px] bg-white drop-shadow overflow-y-auto">
            <table
              class="w-full border-t border-collapse border-gray-200 table-auto"
            >
              <thead>
                <tr class="bg-[#FAFBFC] text-center drop-shadow">
                  <th class="py-2">ID</th>
                  <th class="py-2">User</th>
                  <th class="py-2">Date Of Birth</th>
                  <th class="py-2">Email</th>
                  <th class="py-2">Job</th>
                  <th class="py-2">Country</th>
                  <th class="py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="text-xs font-medium text-[#686868] bg-white drop-shadow"
                  v-for="user in users"
                >
                  <td class="px-3 py-4 text-center">{{ user.id }}</td>
                  <td>
                    <div class="flex items-center gap-2">
                      <div class="w-8 overflow-hidden rounded-full">
                        <img
                          :src="user.profile_picture"
                          alt="Image"
                          class="object-cover object-center w-full"
                        />
                      </div>
                      <p class="text-[#080808]">
                        {{ `${user.first_name} ${user.last_name}` }}
                      </p>
                    </div>
                  </td>
                  <td>
                    {{
                      new Date(user.date_of_birth)
                        .toISOString()
                        .substring(0, 10)
                    }}
                  </td>
                  <td class="text-[#080808]">{{ user.email }}</td>
                  <td>{{ user.job }}</td>
                  <td class="text-[#080808]">{{ user.country }}</td>
                  <td>
                    <div class="flex gap-1">
                      <Button
                        class="px-3 py-2 bg-white text-[#080808] drop-shadow"
                      >
                        Select
                      </Button>
                      <Button
                        @click="detailClick(user)"
                        class="px-3 py-2 bg-white text-[#080808] drop-shadow"
                      >
                        View Detail
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
    <Modal :show="showModal" @close="showModal = !showModal">
      <div class="flex flex-col w-full gap-8 p-2">
        <div class="flex items-center justify-center w-full gap-6">
          <div class="w-[160px] rounded-full overflow-hidden drop-shadow">
            <img
              :src="dataUser.profile_picture"
              alt="Image"
              class="object-cover object-center w-full"
            />
          </div>
          <div class="flex flex-col gap-2">
            <h4 class="font-medium text-[32px]">
              {{ `${dataUser.first_name} ${dataUser.last_name}` }}
            </h4>
            <p class="font-medium text-[16px]">{{ dataUser.email }}</p>
            <p class="font-medium text-[16px]">{{ dataUser.phone }}</p>
          </div>
        </div>
        <div class="flex items-center justify-center gap-8">
          <div class="flex flex-col order-2 gap-2">
            <p class="font-medium">
              Gender: <span class="text-slate-500">{{ dataUser.gender }}</span>
            </p>
            <p class="font-medium">
              Job: <span class="text-slate-500">{{ dataUser.job }}</span>
            </p>
            <p class="font-medium">
              City: <span class="text-slate-500">{{ dataUser.city }}</span>
            </p>
            <p class="font-medium">
              Country:
              <span class="text-slate-500">{{ dataUser.country }}</span>
            </p>
            <p class="font-medium">
              Date of birth:
              <span class="text-slate-500">{{
                new Date(dataUser.date_of_birth).toISOString().substring(0, 10)
              }}</span>
            </p>
          </div>
          <div class="flex flex-col order-1 gap-2">
            <p class="font-medium">
              State: <span class="text-slate-500">{{ dataUser.state }}</span>
            </p>
            <p class="font-medium">
              Street: <span class="text-slate-500">{{ dataUser.street }}</span>
            </p>
            <p class="font-medium">
              Zip code:
              <span class="text-slate-500">{{ dataUser.zipcode }}</span>
            </p>
            <p class="font-medium">
              Latitude:
              <span class="text-slate-500">{{ dataUser.latitude }}</span>
            </p>
            <p class="font-medium">
              Longitude:
              <span class="text-slate-500">{{ dataUser.longitude }}</span>
            </p>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<style scoped>
.arrow-up {
  transform: rotate(45deg);
}

.arrow-down {
  transform: rotate(-45deg);
}
</style>
