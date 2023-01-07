import './components/ts-complext-component.scss';

export function component(props: {title: string, content: string, actions: string[]}): HTMLElement
{

    const template = `
       <div class="mdc-card my-card">
         <div class="mdc-card__content my-card-content">
            <div class="my-card-title">${props.title}</div>
            ${props.content} 
         </div>
         <div class="mdc-card__actions">
           <div class="mdc-card__action-buttons">
             ${props.actions.map((action: string) => `
                <button class="mdc-button mdc-card__action mdc-card__action--button">
                  <div class="mdc-button__ripple"></div>
                  <span class="mdc-button__label">${action}</span>
                </button>
             `)}
           </div>
         </div>
       </div>
    `;

    return new DOMParser().parseFromString(template, 'text/html').body.firstElementChild as HTMLElement;
}