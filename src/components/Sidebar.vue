<script setup>
const props = defineProps({
  path: String,
});
</script>

<template>
  <nav class="w-[240px] bg-white h-full drop-shadow px-4">
    <h1 class="font-bold text-[30px] px-2 py-4">Heylink.</h1>
    <ul class="flex flex-col gap-">
      <RouterLink
        to="/dashboard"
        class="flex items-center gap-1 p-2 rounded"
        :class="[path === '/dashboard' ? 'bg-[#E3F2FD]' : '']"
      >
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_217)">
              <path
                d="M1.66669 10.17C1.66669 8.26249 1.66669 7.30916 2.10002 6.51916C2.53169 5.72832 3.32252 5.23832 4.90335 4.25666L6.57002 3.22249C8.24085 2.18499 9.07669 1.66666 10 1.66666C10.9234 1.66666 11.7584 2.18499 13.43 3.22249L15.0967 4.25666C16.6775 5.23832 17.4684 5.72832 17.9009 6.51916C18.3334 7.30916 18.3334 8.26249 18.3334 10.1692V11.4375C18.3334 14.6875 18.3334 16.3133 17.3567 17.3233C16.3809 18.3333 14.8092 18.3333 11.6667 18.3333H8.33335C5.19085 18.3333 3.61919 18.3333 2.64335 17.3233C1.66669 16.3133 1.66669 14.6883 1.66669 11.4375V10.17Z"
                stroke="#424242"
                stroke-width="1.5"
              />
              <path
                d="M12.2227 12.9999C11.8898 12.9999 11.6209 13.2606 11.6209 13.5833C11.6209 13.906 11.8898 14.1667 12.2227 14.1667H15.2316C15.5644 14.1667 15.8333 13.906 15.8333 13.5833V10.6664C15.8333 10.3437 15.5644 10.083 15.2316 10.083C14.8987 10.083 14.6298 10.3437 14.6298 10.6664V12.1741L11.4441 9.08763C11.2091 8.85975 10.8273 8.85975 10.5923 9.08763L8.61205 11.0073L6.02819 8.50426C5.79312 8.27637 5.41137 8.27637 5.1763 8.50426C4.94123 8.73214 4.94123 9.10222 5.1763 9.3301L8.18517 12.247C8.42024 12.4749 8.80199 12.4749 9.03705 12.247L11.0191 10.3255L13.7779 12.9999H12.2227Z"
                fill="#424242"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_217">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        Dashboard
      </RouterLink>
      <RouterLink
        to="/overview"
        :class="[path === '/overview' ? 'bg-[#E3F2FD]' : '']"
        class="flex items-center gap-1 p-2 rounded"
      >
        <span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.6667 1H2.33333C1.97971 1 1.64057 1.14048 1.39052 1.39052C1.14048 1.64057 1 1.97971 1 2.33333V15.6667C1 16.0203 1.14048 16.3594 1.39052 16.6095C1.64057 16.8595 1.97971 17 2.33333 17H15.6667C16.0203 17 16.3594 16.8595 16.6095 16.6095C16.8595 16.3594 17 16.0203 17 15.6667V2.33333C17 1.97971 16.8595 1.64057 16.6095 1.39052C16.3594 1.14048 16.0203 1 15.6667 1Z"
              stroke="#424242"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <path
              d="M4.30664 11.5933L6.82086 9.07912L8.77109 11.0245L13.4444 6.33334"
              stroke="#424242"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.88892 6.33334H13.4445V9.8889"
              stroke="#424242"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        Overview
      </RouterLink>
    </ul>
  </nav>
</template>
