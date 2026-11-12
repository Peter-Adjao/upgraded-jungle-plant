import Button from "@/ui/Button";

export default function EmptyState({
    title, 
    description,
    icon: Icon,
    actionLabel,
    onAction
}) {
    return (
        <section className="empty-state">
            <Icon aria-hidden="true" /> 

            <h3 className="empty-state__title">{title}</h3>

            <p className="empty-state__description">{description}</p> 

            {actionLabel && onAction && (
                <Button
            size="lg"
            variant="primary"
            rounded="sm"
            type="button"
            onClick={onAction}
            >
            {actionLabel}
            </Button>
            )}
        </section>
    );
}