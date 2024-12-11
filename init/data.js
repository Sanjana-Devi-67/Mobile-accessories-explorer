const sampleProducts = [

  {
    "title": "Samsung Galaxy S23 Ultra",
    "description": "The Samsung Galaxy S23 Ultra boasts a 200MP camera, Snapdragon 8 Gen 2, and a 6.8-inch Dynamic AMOLED display.",
    "image": {
      "url": "https://th.bing.com/th/id/OIP.aS90WZaTR2qNpI901XrfgAHaF6?w=226&h=181&c=7&r=0&o=5&pid=1.7",
      "filename": "galaxys23ultra.jpg"
    },
    "price": 89999,
    "reviews": [
      "638e9a6d8243d92fb3f3c1d7",
      "638e9a6d8243d92fb3f3c1d8"
    ],
    "owner": "638e9a6d8243d92fb3f3c1d1"
  },
  {
    "title": "Google Pixel 8 Pro",
    "description": "The Google Pixel 8 Pro offers a 50MP main camera, Tensor G3 chip, and a vibrant 6.7-inch OLED display.",
    "image": {
      "url": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC4AK0DASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAAAAEFBwMEBgII/8QAUhAAAQMCAgMHDQkPAwUAAAAAAQACAwQRBSEGEjETQVFhcYGxBxQXIjIzNVV0kZOU0SM2QlJyc6GytBUWJDRDU2J1hJKzwdLT4iVU8EWCwsPx/8QAHAEAAQUBAQEAAAAAAAAAAAAAAAECAwUGBAcI/8QAOBEAAgEDAwIDBgQCCwAAAAAAAAECAwQREiExBVFBcfATIjJhkbEGFDShFcFCQ1JygYKS0dLh8f/aAAwDAQACEQMRAD8AttJNCAEhJzmsa573BrWtLnOcQA1oFySSq4xjTXFHEvoJY6OlcXdbncmS1U0d7CR+6gsaDtA1b8fACN4LIQqa+/DSrxrUegpv7a8nTHSkf9Xn9BS/20uButFzoVL/AH5aU72LzehpP7aX356VeN5vQUv9tGA1oulCpb789K/G83oKT+2vTNMNLH6/+sShkY1nvdBSdre5A72OA7+8TcAXRgNRc6FSI090hN9TFK2UA2Lo6aBzbjgLae30lblL1Scfpw4SsNWCBbrmie1zbcBp2s+kJdLF1IuJCqbso4x4uph+yVp/8147KmN+KYPV6u310aX2DUi3EKpuydpH4kj4vwSs6ddB6pukYHgiH1Ku/uKL2ke4/S+xbKFUp6p+kniaE/sdcP8A2Lz2VcchIfU4NAIgRrEx1cPmc8uH0JVOL4YaWvAt1JQOjWlGF6TUsk9JrRzwlrammkIL4i69iHDItOdjbe2cM+nCCTQhACQmkgCL0he6PAsec02Iw6qH70ZaVROM1EsbJHtcQ8MijYd9l7C7eO17K9NJfAGP/q+o+qqDx0+5njdH/JKRv4kQLS6SRgklc0Pe0PkcXu1QSAXEDPLapXSDDsMwuqp4MPxNtfHJTNmkfG9jxG8uI1S6I6uYsbbRdRb2wCOFzHkyO1t0YWkBljkQ7fvyZW48vDdW41tl87ZZJB5tYfI9s4aHHVeCHDeNswVMKKgbAyvLaeV0sLS4RyOYY3PaN8subedSiUjlyBKzRxNnbh9O7vdTXasw+PG1peW8+oB/9WArapO/YN5bL/BmUlJJzin3RHNtQk12ZL0zsUFVVMljjjoWAtpRG1jQGhwDAzVN9ndXAsdnFKOFFqv1Jakut7mHNZYm3wrFYELURhpWMszkp6nnCC54T5yk4nVdmdh3zwJpHY7kKlXJGdpd2q3M9y3fPAsZLuF3nKwOxPCmNBdWRABouQJHWy/QaVpnSLRffxigB2WL3gjlBavmX8rcOTapy+jPYHKNNJS2JIEF3bveG22tuSvQbRloE00jg5tRrsDLtA1bRtOsCDc91l7VEHSHRfxzQekd/SvJ0g0Y8c0HpHf0rrpUK9P+pb/ysilUpy/p/uiN0ShZhXVCr6GkG50tVSTkxN7hrXwRVbWgcDTcDiVvqn9HKmkrOqOKilnjngfSSBksRJY4soI2OsSN4iyuBepWTm7am6nOlZz3wZmtj2ktPGWCEJrrIhITQgCI0k8AY/8Aq+p+qqDxxpMdwCQ0sJtvDhKvzSTwBj/6vqfqqj6vvn/aOhKRy2aORQuh3GD81H+6EblD+bZ5gkDUReHscZtex1WtNzvXNslLJANbkAAOIIu3ZdKNbyIrNHKITg8h2DEo2niDxIw9KwlYMQJGHQkEgiqaQRvZSZp0ZaWpdg06k4vxO2WaJtGWe6vlbJdwGqLttdpB2HjBy3+LOOw6sbXUdNUgjWczVlA+DK3Jw/mOVba1aanFNPYzDThJxZsiPD+2/CJv0bxgXtfeAtnlv9Fz5YyiJka+Z4s+zHtYTdtsrg5f851gQl0/MRy+RlIpGGXVke8tcRGQXNJ7TI7ALX5NmzNe6qg0dr6aibOHTTlhNYXRlpjcW5CJ4s7bwErUXpjtVwO9sPIV5M5NTytsM+g52yq00pN/t28jmsb0cpKOnnmw0VM7Wujcd0cC+KMNJe4tDRcX5f5rk1bfSuI0lwdtK4V9MwNp5n6s8bRlFKcwWj4rvoPKFdW11reifJkOqdIVGPtqHC5X8yV6mHvpoPmMR/gK/VQfUw99NB8xiP8AAV+qwMyJCaEACSaSAIfSfwBjvkcnSFSFX3wfJb0K8NJgHYBjwJItQzO7UkG7RrDZ9Ko+q75zDoSoinyaxSTKSBonbOcX5EG1rbyaMhvecm3mQAnCwHIFrYj4Oj8qb0SrYcSbkrXxHwdH5S3olQPjyY8ExX7nTlktzSTloltcmNwyEjR08XIu6a5j2texzXMe0OY5pBa5p2EEbyq1SuF43V4baPv1KTcwvNtUnaY3bx+jiVjaXnsvcnx9jhu7P2vvw5+53yFHUmNYRVgatSyKQ2vHUkROB4A5x1D+8pAFpFwQRwtII84yV7CcZrMXko505Q2ksHlCWs34zfOEazfjN84XkkuWfR0PhRuMu5jDxdGS8VNNFV09RSyj3OojdE7ivscOMGxHIstNquiHbDJzhtCylreEedTxzs0cdTDzGXBzPU4jkg0uoYX3D4ziUMg42wOBB8yvtUzotC1nVEIaQBq1dTlncyUbXEedxVzLRwlqimeYVqfsqsqfZtfQE0k04iBCEIAhdKJGxaP465wJBo3x5cMpEYP0qkarvnMOhXVpf728b+ah/jxqlKrvnMOhKiOfJrlJCEDASKaRQAis1OYxLhW6Na5jsQjYQ8BwJeyZguDlvrCVhrHuipIJGGz46yKRp4HN3RwSSWVgJR1xce6Oy63pP9vT+hi/pQaekIP4NT+hi9i8QVMdTDBUM7iaNsjeK4zHNsWUOCp22jAOVSLw2zH1tSf7en9DH7ExFCwO1I42ZHuGNb0BZEnbHchSan3G65PxOtEMFm+5Rdy38mzg5E9xg/MxejZ7F6b3Lfkt6F6UuEe6xnLStzJDFCGZRxgXJyY32LJucX5uP9xvsQwWY3kv580pZoKaKepqHatPTRSVE7uCOJuu72DlRjwGObW7ZyOEywjqoVFrBojko26oyMrMPjuMvkuVtKhtBquWv00o62XvlXX4jUvG2xlppn2HJeyvpWcVhJGXnLVJy7ghCEo0SE0IAgNL/e3jfzUP8eNUrU985h0K8dJmsfgGPBzQ4ChmcARcazRrNPMQCFR1T3zmHQlRHPk1kJlJAwEimkUAIrWxD8Qb5QzolWyVhrIpZqSGKJpdJJVRtY0WuTaXhyQPjyZdHcSbGesJ3AMe4upnHY152xk8e9x8q6vNcKMCxglurC0lxs0NkYS48DQDclT9JiVZh7IYMajc1pJjjqRZ5Bb8GcNz57X5do461Jv3olD1Pp0pt1qKz3X80T4NwCh2x3IURujmjbLC9kkbs2vjcHMPOEO2O5CuAzDTWzOwb3Lfkt6F7aNYgcJXhvct+S3oWf3OnikqKiSOGFgu+ad7Y4mD9J7yG/Spz3JPEU2ZeTmVedUHSJgY7R+jkDnlzH4rIw3DSw6zKUEb4NnP4wBvEL1pH1QIWMlotH3l0rgWS4iWloYNhFI12d/0iBxD4QrNxc4uc4kucSSSSSScySSumlSx70iqurpSWiB2nU399GC/PVf2SVfQSoHqYsa/SnDta/ucVfK2xI7cQaoJtylX+uoqxITQgAQhJAETpJ4Bx79X1P1VRtT3zmHQry0k8A495BUfVVG1Pd8wSoinya5STKSBoJFNCAPK9NfHH1i+RwawVbQXONgNaOdouV5K1cR/EW+UM6JUD48nfHGMIfHG37oxxzGlNM2aJ72ilYBBZgjdO43dqOa8sIycMjmFzGlE1PiMlHDhzpKqeWVgDIny1E08jYi1z2tc58licmguJsOYc1huG12LVlPQ0UevPO6wvkxjRm58jt5oGZ/5e7tHtGsL0epw2BolrXsDamse0CWQnMtZ8VnEOe+9WX/UadmsPeT4R2UaEqr24OGwTQHSYFtRU14woGziyJxmqSAdj2xuEY53nkXZQaO0rNVs9dX1RJALpTTR35oYgfO4qeldsYOU8qxt7pvygsDf9buqsnGMseS9MsV0u1ms1IKT+aOQlxTFnXbHWPprEtD6aClLwBl+Wjd0hcnjOC6RVzuuHYpNiVruYyqkc17RwRtc4x+ayn3d0/5TulZIX2Oqdh2cRWso3VSHibG56TbV47xx5P0jlcJwGjqKV7q6GoZUMqJYnt1zGQGhpF2kca3/AL2sE+JUemP9KnZdvMFjXf7ect08HhXVq1a1vqtCE3iLaNfQalgotOIqeAOETKOqLQ92sbvpY3G551dqpnRH3/jyKf7JErlVlB5imzRWsnKhCUuWl9hoSTTzpBJNJAETpJ4Bx7yCo+qqNqe+cwV5aSeAMe8gqPqqjanvnMEqIp8muUk0kDQQhIoARWriH4i3yiPolW0m2l6+fhdFnaqxOkgcRtDHukDjzC6bOShFyfCJILLwjvdA8Ejw3C2V8rB17ibGykkdtHS91HGPld2eUfFXYBy12uY0BrQGtaA1rRkA0CwAC9BwO+vIbjqErmrKrLl+kjWU6CpxUUMm5J4ShvdN+UEknSQwtdNNJHFDENeWWZ7WRxsB7p7nEABVm8nsSPZHCu7p/wAp3SUrkZjaMwk2SKUbpFIySNxcWvjcHMcLnYRkmvRFsbOLTWUZnkOLSN9rSsZTBuG8Qt9KTlZU94o+c/xEsdVuP7zDRD3/AP7DUfZYlcqprRD3/wD7DUfZYlcquafwI0Vn+np+S+wJpJp51AhCSAInSTwDj3kFR9VUZU985grz0l8AY95BUfVVF1PfOYJURT5MCEIQNBBa617ZJL3rs2kXNrWIFsssigDGpLA7fdbAb7BX3z4RBUEKNK9w1Qop8IqibNgxOmkkPBHd4d9BK57qDqUJwXLTX7E9F6akW+5bgeMs1kjdcjkK94cMSkdCMMmpmSB1V171zG2RrmERCGwBEmXbkWNrix2gjw+Q9c0rZ9QTmNgrRFq6omu7W1dz7W9rXtvry2t0l07WF1qXveH/AHnnvsahXKlUdPz9cfTcy3C4rqjy1DMGw+NhIgmxG1Ra4DiyFzo2u4u6PNxLvdxrG4hVOkmkdhvW8spLnDrUtkAZTwU0QFg9mqS47TfPbljY8RRVFQ2ITVFKxtRBGImyyPcy9xEHbHcYBNr2VhSsF06/oPVrzvxjhPu/9L8ThncqvRqPGFH1/wClPaJiZ0OIsJIiZLCWXBsHua7WA8zbrpCy2/5gpzF4nQRUMVUxjcSYZxUyCZs0s8J1THJMWtFjtDAbmwzK08NhpaqdsU9i0GWSYudIzc4WsBDmuYQ0C+2/CvSri0tadBXNaDbfPvY4/b5LuVlv126pVvykKyjBbR91PO/zw1znfg1IoHPYX67Q0F20HeTNK87Hs8xUrQCESzbgGOOrXuw4T6uo6os7rfdN07XgtfK9luVZxwwVJxxobJajGHboKLdzJd3XFutM9S1tvFvqd2trCrCiqcve89vMz1Wwd/Gtf1Zx1J7rOG38kczomwx9UIsJuRQTG446SEq5FTmirg/qiyuGzrKoA5BSwhXEoZKKbUOPAsrbCowx2X2GhJNNOgEk0IAiNJfAGPeQVH1VRVR3zmCvTSXwBj3kE/QqLqO7SoinyYEISQNBCEkCgtTED+CM+fHRIttamIfikfzw6HoHR5O50bxYYhhsGvIOuaRraeoBcNY2FmSZ/GA84KnGTiN7H6zO0cHWD27Ab8KrDBZ8MijmbUljZCQbv1bd0M7OyOVwM8ibqQjYajdHUrHzRsdqkwt3XVvmA4xgi6y9x0CnUnKevSm+3f8AxLaHUHGKjpyy3daMgESR2NiPdGbDzptczWb28e0flGe1VM2ir3EhtFVuIFyG00pNuZq9fc7E8v8ATq71Sf8AoVU/wxR8bhfRf8iT+IT/ALHr6HRPc3WedZvdO+EM8+VYiRsu3PjC53cagfkZfRv9iBBUnZBMeSJ/sXq0b6SWNHr6GPdjFv4/X1OwBa1rW6zMmgd03e51jmlEbHOBBce1bYg524uBcmYKgZugmA44nj+S3IW+7sfFFJEwxuMzHBwYHkmzWFxuRsN+Xn56/UXGDSWH6+RBXtY06cpKa2XrxJTQ33/HyCo+zRK51TGhnv8Aj+r5/s0KuhVVP4UW9p+nh5L7CTQhPOoEISQBq4lSdfYfiVHcA1VJUQNJ2Nc9ha0nkNl8+1LZYZ5oKhjo54HuhmjeLOZI3IghfRigMY0S0dx2UT18MhnDQzdoJDFLqjYC9guQN690DZLJRWs3hCWu3hCtw9S/Q4/DxX1z/BHYu0O+Pivrn+CBukqPXbwhLXbwhW72LtDvj4r65/gl2LtDvzmLeuf4IF0lR6zeFatd21M22YbKNbiuDY9KufsXaHfHxX1z/BJ3Uv0TAO5TYm1xFjr1IkaQd5zXNsQgEsFB2K2aKur8PmE9HNJDIMiWntXN+K9pyI4iFcUnUkwhziY8VqmNOxrqeGS3OTdeexHhnjif1OD2pJRUlpksokTaeUcphmncTHRnEKWSKRuRmo+3Y7h1oXkHls48i66n0y0Vn1SMRjjI1S4VAkisd+2u230rx2I8N8cT+pwe1PsR4b44n9Tg9qz1z+HbOu8rMfJ/7nbG+qxWHucs/HMFa5xdWMLS53ew+Q7+80LQqtLaaNpZQU0kr8wJKntIweHc2HWP7wXcdiPDPHFR6pB7UdiPDPG9R6pB7VsZX9Vx0rYoo2FJPL3OHw7GmT07pMRrohUOnkOrIdXVjs3VDWtFgNtlsS4xg0TS41bJLDJkAc97uIXAHnK6/sR4b44n9Uh/qWSLqS4K1wMmK1rgNojhp4789iVVTpKcnKT3ZzVOkUalRzbe/hsQHU0iq8R0oxDFTGWw09JPuh+Cx1QWRRRX4bNJ5ldCisJwOkwSlbR4c4QwBxe4NiYXyPO18j3XcXHhJ6FJBsg2yk8rWjoUqWNi2jFRSiuEZEJC++U0o4EIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCAP/Z",
      "filename": "pixel8pro.jpg"
    },
    "price": 100000,
    "reviews": [
      "638e9a6d8243d92fb3f3c1d9",
      "638e9a6d8243d92fb3f3c1da"
    ],
    "owner": "638e9a6d8243d92fb3f3c1d2"
  },
  {
    "title": "iPhone 14 Pro Max",
    "description": "The iPhone 14 Pro Max features a 48MP main camera, A16 Bionic chip, and a stunning 6.7-inch Super Retina XDR display.",
    "image": {
      "url": "https://th.bing.com/th/id/OIP.lyvNG7WvieG5oTJUExF2vwHaJN?w=161&h=200&c=7&r=0&o=5&pid=1.7",
      "filename": "iphone14pro.jpg"
    },
    "price": 70500,
    "reviews": [
      "638e9a6d8243d92fb3f3c1d5",
      "638e9a6d8243d92fb3f3c1d6"
    ],
    "owner": "638e9a6d8243d92fb3f3c1d0"
  },
  {
    "title": "Samsung Galaxy S22 Ultra",
    "description": "Samsung Galaxy S22 Ultra features a 108MP quad-camera system and a 6.8-inch Dynamic AMOLED display.",
    "image": {
      "url": "https://dantell.dk/images/Samsung-Galaxy-S22-SM-S901B-5G-128GB-8GB-Sort-SM-S901BZKDEUB-p.jpg",
      "filename": "galaxys22ultra.jpg"
    },
    "price": 85000,
    "reviews": [
      "638e9a6d8243d92fb3f3c1d7",
      "638e9a6d8243d92fb3f3c1d8"
    ],
    "owner": "638e9a6d8243d92fb3f3c1d1"
  },
  {
    "title": "OnePlus 11 5G",
    "description": "OnePlus 11 5G with a 6.7-inch Fluid AMOLED display, Snapdragon 8 Gen 2, and a 50MP triple-camera setup.",
    "image": {
      "url": "https://th.bing.com/th/id/OIP.8GXTEBq_9vWNyehlgef7XwAAAA?w=251&h=180&c=7&r=0&o=5&pid=1.7",
      "filename": "oneplus11.jpg"
    },
    "price": 55000,
    "reviews": [
      "638e9a6d8243d92fb3f3c1d9",
      "638e9a6d8243d92fb3f3c1da"
    ],
    "owner": "638e9a6d8243d92fb3f3c1d2"
  },
  {
    "title": "Xiaomi Redmi Note 12 Pro",
    "description": "Redmi Note 12 Pro offers a 6.67-inch AMOLED display, MediaTek Dimensity 1080 chipset, and 50MP camera.",
    "image": {
      "url": "https://th.bing.com/th/id/OIP.f7VLO-hpZJBH_Yo7RNduqgHaHa?w=181&h=181&c=7&r=0&o=5&pid=1.7",
      "filename": "redminote12pro.jpg"
    },
    "price": 22500,
    "reviews": [
      "638e9a6d8243d92fb3f3c1db",
      "638e9a6d8243d92fb3f3c1dc"
    ],
    "owner": "638e9a6d8243d92fb3f3c1d3"
  },
  {
    "title": "Realme GT 2 Pro",
    "description": "Realme GT 2 Pro features Snapdragon 8 Gen 1, 6.7-inch AMOLED display, and a 50MP main camera.",
    "image": {
      "url": "https://th.bing.com/th/id/OIP.6oXj0INzkrZa-putw1F4RQHaEh?w=268&h=180&c=7&r=0&o=5&pid=1.7",
      "filename": "realmegt2pro.jpg"
    },
    "price": 30000,
    "reviews": [
      "638e9a6d8243d92fb3f3c1dd",
      "638e9a6d8243d92fb3f3c1de"
    ],
    "owner": "638e9a6d8243d92fb3f3c1d4"
  },
  {
    "title": "Apple AirPods Pro (2nd Generation)",
    "description": "AirPods Pro (2nd Generation) with Active Noise Cancellation and improved sound quality for an immersive experience.",
    "image": {
      "url": "https://th.bing.com/th/id/OIP.4SlA6u_QWHWHtE6rOma3WwHaE8?w=278&h=185&c=7&r=0&o=5&pid=1.7",
      "filename": "airpodspro2.jpg"
    },
    "price": 3000,
    "reviews": [
      "638e9a6d8243d92fb3f3c1df",
      "638e9a6d8243d92fb3f3c1e0"
    ],
    "owner": "638e9a6d8243d92fb3f3c1d5"
  },
  {
    "title": "Anker PowerCore 10000mAh Power Bank",
    "description": "Compact power bank with 10000mAh capacity, perfect for charging your phone on the go.",
    "image": {
      "url": "https://th.bing.com/th/id/OIP.4DvgHo_wel2Bu5KHbbQ9bAHaGC?w=265&h=215&c=7&r=0&o=5&pid=1.7",
      "filename": "ankerpowerbank.jpg"
    },
    "price": 1500,
    "reviews": [
      "638e9a6d8243d92fb3f3c1e1",
      "638e9a6d8243d92fb3f3c1e2"
    ],
    "owner": "638e9a6d8243d92fb3f3c1e3"
  },
  {
    "title": "Spigen Tough Armor Case for iPhone 14 Pro",
    "description": "Spigen's Tough Armor Case offers ultimate protection with air cushion technology and a built-in kickstand.",
    "image": {
      "url": "https://th.bing.com/th/id/OIP.r0MPxNWpkfnz0ndrnWzd0gHaHa?w=177&h=180&c=7&r=0&o=5&pid=1.7",
      "filename": "spigencase.jpg"
    },
    "price": 999,
    "reviews": [
      "638e9a6d8243d92fb3f3c1e4",
      "638e9a6d8243d92fb3f3c1e5"
    ],
    "owner": "638e9a6d8243d92fb3f3c1e6"
  },
  {
    "title": "Belkin BoostCharge Wireless Charger",
    "description": "Belkin BoostCharge wireless charger offers fast charging up to 10W for iPhone, AirPods, and other Qi-enabled devices.",
    "image": {
      "url": "https://th.bing.com/th/id/OIP.wylIiRQxAwhXZ2NxAR2LfwHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7",
      "filename": "belkincharger.jpg"
    },
    "price": 600,
    "reviews": [
      "638e9a6d8243d92fb3f3c1e7",
      "638e9a6d8243d92fb3f3c1e8"
    ],
    "owner": "638e9a6d8243d92fb3f3c1e9"
  },
  {
    "title": "Xiaomi Mi 30W Wireless Car Charger",
    "description": "Xiaomi's Mi 30W wireless car charger is designed for charging while on the move, with fast and efficient charging capabilities.",
    "image": {
      "url": "https://www.bing.com/th?id=OIP.C-d5vanUc5FMIgM5F-0MZAHaHa&w=174&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      "filename": "xiaomiwirelesscharger.jpg"
    },
    "price": 1200,
    "reviews": [
      "638e9a6d8243d92fb3f3c1ea",
      "638e9a6d8243d92fb3f3c1eb"
    ],
    "owner": "638e9a6d8243d92fb3f3c1ec"
  },
  {
    "title": "Samsung Galaxy Watch 5",
    "description": "The Samsung Galaxy Watch 5 offers advanced health monitoring features, GPS, and a sleek design.",
    "image": {
      "url": "https://www.bing.com/th?id=OIP.Rq_592yCXyqPUsAlpvWKRgHaHf&w=159&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      "filename": "galaxywatch5.jpg"
    },
    "price": 15000,
    "reviews": [
      "638e9a6d8243d92fb3f3c1ec",
      "638e9a6d8243d92fb3f3c1ed"
    ],
    "owner": "638e9a6d8243d92fb3f3c1ed"
  },
  {
    "title": "Sony WH-1000XM5 Headphones",
    "description": "The Sony WH-1000XM5 offers noise-cancelling features with superior sound quality and up to 30 hours of battery life.",
    "image": {
      "url": "https://m.media-amazon.com/images/I/61+btxzpfDL._AC_SL1500_.jpg",
      "filename": "sonyheadphones.jpg"
    },
    "price": 3500,
    "reviews": [
      "638e9a6d8243d92fb3f3c1ee",
      "638e9a6d8243d92fb3f3c1ef"
    ],
    "owner": "638e9a6d8243d92fb3f3c1f0"
  },
  {
    "title": "Google Pixel 6 Pro",
    "description": "The Google Pixel 6 Pro features Google's Tensor chip, 50MP camera, and a 6.7-inch LTPO OLED display.",
    "image": {
      "url": "https://9to5google.com/wp-content/uploads/sites/4/2021/05/pixel6pro_onleaks_2.jpg?resize=350",
      "filename": "pixel6pro.jpg"
    },
    "price": 50000,
    "reviews": [
      "638e9a6d8243d92fb3f3c1f1",
      "638e9a6d8243d92fb3f3c1f2"
    ],
    "owner": "638e9a6d8243d92fb3f3c1f3"
  },
  {
    "title": "Apple MagSafe Charger",
    "description": "Apple's MagSafe Charger provides faster wireless charging for iPhones and compatible accessories.",
    "image": {
      "url": "https://www.bhphotovideo.com/images/images2500x2500/apple_mhxh3am_a_magsafe_charger_1598906.jpg",
      "filename": "magsafecharger.jpg"
    },
    "price": 2500,
    "reviews": [
      "638e9a6d8243d92fb3f3c1f4",
      "638e9a6d8243d92fb3f3c1f5"
    ],
    "owner": "638e9a6d8243d92fb3f3c1f6"
  },
  {
    "title": "Oppo Find X5 Pro",
    "description": "Oppo Find X5 Pro features a 50MP primary camera, Snapdragon 8 Gen 1, and 80W fast charging support.",
    "image": {
      "url": "https://m.media-amazon.com/images/I/51k-iFasELL.jpg",
      "filename": "oppofindx5pro.jpg"
    },
    "price": 45000,
    "reviews": [
      "638e9a6d8243d92fb3f3c1f7",
      "638e9a6d8243d92fb3f3c1f8"
    ],
    "owner": "638e9a6d8243d92fb3f3c1f9"
  },
  {
    "title": "Nokia 8.3 5G",
    "description": "Nokia 8.3 5G offers a 6.81-inch Full HD display, Snapdragon 765G processor, and a quad-camera setup.",
    "image": {
      "url": "https://akm-img-a-in.tosshub.com/indiatoday/images/device/168329946860f4e88909e91-188x350_one_to_one.jpg?VersionId=9BXTwSWN7D3qT45lq404nky73LQ2ZLrY",
      "filename": "nokia83.jpg"
    },
    "price": 60000,
    "reviews": [
      "638e9a6d8243d92fb3f3c1fa",
      "638e9a6d8243d92fb3f3c1fb"
    ],
    "owner": "638e9a6d8243d92fb3f3c1fc"
  }
  
  
  
];

module.exports = { data: sampleProducts };
