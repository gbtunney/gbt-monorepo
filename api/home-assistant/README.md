# 🏠 Home Assistant

## Core Interface & Tools

- [DEVTOOLS – Home Assistant](http://homeassistant.local:8123/developer-tools/yaml)
- [VS CODE – Home Assistant](http://homeassistant.local:8123/a0d7b954_vscode/ingress)

## Configuration & Settings

- [SETTINGS – Home Assistant](http://homeassistant.local:8123/config/dashboard)
- [SYSTEM – Home Assistant](http://homeassistant.local:8123/config/system)
- [HELPERS – Home Assistant](http://homeassistant.local:8123/config/helpers)
- [ENTITIES – Home Assistant](http://homeassistant.local:8123/config/entities)
- [LABELS – Home Assistant](http://homeassistant.local:8123/config/labels)
- [AUTOMATIONS – Home Assistant](http://homeassistant.local:8123/config/automation/dashboard)
- [SCRIPTS – Home Assistant](http://homeassistant.local:8123/config/script/dashboard)
- [INTEGRATIONS – Home Assistant](http://homeassistant.local:8123/config/integrations/dashboard)

## Dashboards

- [DASHBOARD STAGING – Home Assistant](http://homeassistant.local:8123/real-staging/0)
- [Local Dev Dashboard](http://localhost:5173/local/ha-dashboard/)

## ESPHome

- [ESPHOME – Home Assistant](http://homeassistant.local:8123/hassio/ingress/5c53de3b_esphome)
- [ESPHome Web Flash Tool](https://web.esphome.io/)
- [Getting Started with ESPHome and Home Assistant](http://homeassistant.local:8123/)

## Community & Custom Components

- [Xiaomi BLE Thermometer Integration – PVVX Firmware](https://community.home-assistant.io/t/xiaomi-temperature-humidity-sensor-home-assistant-integration-pvvx-custom-firmware-may-2023/572569/9)
- [Peering Xiaomi BLE with ESP32 Proxy](https://community.home-assistant.io/t/peering-xiaomi-ble-thermometer-with-esp32-ble-proxy-no-clue/640799)
- [Dallas Sensor Not Found – ESPHome Error](https://community.home-assistant.io/t/dallas-sensor-not-found-esphome-error/514880/10)

## Misc

- [Too much History - Logging Issue](https://community.home-assistant.io/t/too-much-history-or-the-logging-problem/302770)

- [homeassistant: manage local media](https://www.home-assistant.io/more-info/local-media/setup-media/)

```sh
#ssh then ssh into container
ssh -t root@homeassistant.local -p 22222 "docker exec -it homeassistant /bin/bash"
```

```sh
docker run -d --name="home-assistant" \
  -v /PATH_TO_YOUR_CONFIG:/config \
  -v /PATH_TO_YOUR_MEDIA:/media \
  -v /etc/localtime:/etc/localtime:ro \
  --net=host \
  s ghcr.io/home-assistant/home-assistant:stable
```

## fix for busted home assistant things

```shell
docker pull docker pull ghcr.io/esphome/esphome-hassio:2024.10.1
# get the name of pulled image
docker image ls -l
# save the image and upload via ssh
docker save ghcr.io/esphome/esphome-hassio | ssh -C root@homeassistant.local -p 22222 docker load
```

```json
{
  "result": [
    {
      "active_time": 1732849343,
      "bind_space_id": "187894467",
      "category": "cz",
      "create_time": 1589745613,
      "custom_name": "Hallway String Lights",
      "icon": "smart/icon/ay1519551146071pEnBd/6a8e9ecf2c758b44aed415218b38c499.png",
      "id": "60785480d8f15be61483",
      "ip": "74.77.113.179",
      "is_online": true,
      "lat": "42.9532"
    }
  ]
}
```
