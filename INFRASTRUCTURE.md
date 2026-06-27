# INFRASTRUCTURE.md — {{AGENT_NAME}}

*Living inventory of substrate: containers, services, networks, endpoints. Updated when the substrate changes.*

## VPS / host

- **Public IP:** {{PUBLIC_IP}}
- **OS:** {{OS}}
- **Container runtime:** {{CONTAINER_RUNTIME}}
- **Data volume:** {{DATA_VOLUME}}

## Containers

| Name | Image | Status | Ports | Role |
|------|-------|--------|-------|------|
| {{CONTAINER_NAME}} | {{IMAGE}} | {{CONTAINER_STATUS}} | {{PORTS}} | {{ROLE}} |

## Internal listeners

| Port | Process | Service | Notes |
|------|---------|---------|-------|
| {{PORT}} | {{PROCESS}} | {{SERVICE}} | {{NOTES}} |

## Installed runtimes

| Runtime | Path / Version | Purpose |
|---------|---------------|---------|
| {{RUNTIME}} | {{VERSION}} | {{PURPOSE}} |

## Agent framework

| Type | Path | Notes |
|------|------|-------|
| Built-in plugins | {{BUILTIN_PLUGINS_PATH}} | Framework-shipped |
| User plugins | {{USER_PLUGINS_PATH}} | Custom or community |
| Built-in skills | {{BUILTIN_SKILLS_PATH}} | Framework-shipped |
| User skills | {{USER_SKILLS_PATH}} | User-installed |

## External surfaces

| Surface | Domain | Status | Notes |
|---------|--------|--------|-------|
| {{SURFACE}} | {{DOMAIN}} | {{SURFACE_STATUS}} | {{SURFACE_NOTES}} |

Last updated: {{DATE}}
